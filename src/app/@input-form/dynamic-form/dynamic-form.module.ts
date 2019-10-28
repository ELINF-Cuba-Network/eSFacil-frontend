import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsModule } from './components/components.module';
import { ControlWrapperComponent } from './containers/control-wrapper/control-wrapper.component';
import { CmpOneboxRepeatableComponent, CmpSelectComponent } from './components';
import { BlockWrapperComponent } from './containers/block-wrapper/block-wrapper.component';
import { CmpAuthorComponent } from './components/cmp-author/cmp-author.component';
import { SharedModule } from '../../@shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    ComponentsModule,
    SharedModule
  ],
  declarations: [
    ControlWrapperComponent,
    BlockWrapperComponent
  ],
  exports: [
    ComponentsModule,
    ControlWrapperComponent,
    BlockWrapperComponent
  ],
  entryComponents: [
    CmpOneboxRepeatableComponent,
    CmpSelectComponent,
    CmpAuthorComponent
  ]
})
export class DynamicFormModule {
}
