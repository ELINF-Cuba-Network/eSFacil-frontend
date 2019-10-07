import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';

const ROUTES: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'resources',
        loadChildren: () => import('../resources/resources.module').then(m => m.ResourcesModule)
      },
      {
        path: 'input-form',
        loadChildren: () => import('../@input-form/@input-form.module').then(m => m.InputFormModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule]
})
export class LayoutRoutingModule {}
