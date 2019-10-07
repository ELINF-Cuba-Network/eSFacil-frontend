import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/user/login/login.component';
import { UserComponent } from './components/user/user.component';

const ROUTES: Routes = [
  {
    path: 'esf-user',
    component: UserComponent
  },
  {
    path: 'app',
    loadChildren: () => import('../@layout/layout.module').then(m => m.LayoutModule)
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '',
    redirectTo: '/app/resources/inProgress',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'app'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
