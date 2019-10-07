import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InputFormRoutingModule } from './@input-form-routing.module';
import { SharedModule } from '../@shared/shared.module';
import { BlockWrapperService } from './dynamic-form/containers/block-wrapper/block-wrapper.service';
import { DynamicFormModule } from './dynamic-form/dynamic-form.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    InputFormRoutingModule,
    SharedModule,
    DynamicFormModule
  ],
  exports: [
    DynamicFormModule
  ],
  providers: [
    BlockWrapperService
  ]
})
export class InputFormModule { }
