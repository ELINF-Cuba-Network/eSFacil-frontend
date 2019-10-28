import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../../@shared/shared.module';
import { CmpOneboxRepeatableComponent } from './cmp-onebox/cmp-onebox-repeatable.component';
import { CmpSelectComponent } from './cmp-select/cmp-select.component';
import { DynamicFieldDirective } from './dynamic-field/dynamic-field.directive';
import { CmpGenericComponent } from './cmp-generic/cmp-generic.component';
import { CmpAuthorComponent } from './cmp-author/cmp-author.component';
import { CheckedListComponent } from './cmp-author/checked-list.component';
import { UncheckedListComponent } from './cmp-author/unchecked-list.component';
import { AuthorityCheckerComponent } from './cmp-author/authority-checker.component';
import { AuthorityService } from './cmp-author/authority.service';
import { CmpOneboxComponent } from './cmp-onebox/cmp-onebox.component';
import { BitstreamItemComponent } from './cmp-dropbox/bitstream-item.component';
import { DropboxService } from './cmp-dropbox/dropbox.service';
import { CmpTextareaComponent } from './cmp-textarea/cmp-textarea.component';
import { CmpTextareaRepeatableComponent } from './cmp-textarea/cmp-textarea-repeatable.component';
import { CmpBaseComponent } from './cmp-base/cmp-base.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [
    CmpSelectComponent,
    DynamicFieldDirective,
    CmpGenericComponent,
    CmpAuthorComponent,
    CheckedListComponent,
    UncheckedListComponent,
    AuthorityCheckerComponent,
    CmpOneboxRepeatableComponent,
    CmpOneboxComponent,
    BitstreamItemComponent,
    CmpTextareaComponent,
    CmpTextareaRepeatableComponent,
    CmpBaseComponent
  ],
  exports: [
    CmpSelectComponent,
    CmpOneboxRepeatableComponent,
    DynamicFieldDirective,
    CmpGenericComponent,
    CmpAuthorComponent,
    CheckedListComponent,
    UncheckedListComponent,
    AuthorityCheckerComponent,
    CmpOneboxComponent,
    BitstreamItemComponent
  ],
  entryComponents: [
    AuthorityCheckerComponent,
    CmpOneboxRepeatableComponent,
    CmpOneboxComponent
  ],
  providers: [
    AuthorityService,
    DropboxService
  ]
})
export class ComponentsModule {
}
