import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlockWrapperComponent } from './dynamic-form/containers/block-wrapper/block-wrapper.component';


const routes: Routes = [
  {
    path: 'metadata',
    component: BlockWrapperComponent
  },
  {
    path: '',
    redirectTo: '/app/input-form/metadata',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'metadata'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InputFormRoutingModule { }
