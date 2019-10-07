import { ComponentFactoryResolver, Directive, Input, OnInit, ViewContainerRef } from '@angular/core';

import { CmpOneboxRepeatableComponent } from '../cmp-onebox/cmp-onebox-repeatable.component';
import { CmpSelectComponent } from '../cmp-select/cmp-select.component';
import { CmpAuthorComponent } from '../cmp-author/cmp-author.component';
import { CmpOneboxComponent } from '../cmp-onebox/cmp-onebox.component';

const components = {
    onebox: CmpOneboxComponent,
    oneboxRepeatable: CmpOneboxRepeatableComponent,
    author: CmpAuthorComponent,
    authorRepeatable: CmpAuthorComponent,
    select: CmpSelectComponent
};

@Directive({
    selector: '[esfacilDynamicField]',
})
export class DynamicFieldDirective implements OnInit {
    @Input() config;
    @Input() data;
    @Input() parent;
    component;

    constructor(
        private resolver: ComponentFactoryResolver,
        private container: ViewContainerRef
    ) {}

    ngOnInit() {
        // if config has a repeatable field, resolve the Cmp[name]Repeatable component
        let fieldtype = this.config.fieldtype;
        if (this.config.repeatable === 'true') {
            fieldtype = `${fieldtype}Repeatable`;

            // If this fieldtype is repeatable and his value not is an array
            // Create an array with the value and overwrite this
            // property
            const isArray = Array.isArray(this.data[this.config.cslfield]);
            if (!isArray) {
                const array = [];
                array.push(this.data[this.config.cslfield]);
                this.data[this.config.cslfield] = array;
            }
        }

        // i check if this cslfield is in the data values
        // if not exist, i create this field empty
        if (!this.data.hasOwnProperty(this.config.cslfield)) {
            if (this.config.repeatable) {
                this.data[this.config.cslfield] = [];
            } else {
                this.data[this.config.cslfield] = '';
            }
        }

        // Resolve the component dynamically
        const component = components[fieldtype];

        // Only load component if exist
        if (component !== undefined) {
            const factory = this.resolver.resolveComponentFactory<any>(component);
            this.component = this.container.createComponent(factory);
            this.component.instance.config = this.config;
            this.component.instance.data = this.data;
        } else {
            this.parent.hidden = true;
        }
    }
}
