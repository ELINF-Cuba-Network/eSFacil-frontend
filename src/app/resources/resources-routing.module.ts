import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcceptedResourcesComponent } from './components/accepted-resources/accepted-resources.component';
import { DeniedResourcesComponent } from './components/denied-resources/denied-resources.component';
import { SendResourcesComponent } from './components/send-resources/send-resources.component';
import { InProcessResourcesComponent } from './components/in-process-resources/in-process-resources.component';

const ROUTES: Routes = [
  {
    path: 'inProgress',
    component: InProcessResourcesComponent
  },
  {
    path: 'accepted',
    component: AcceptedResourcesComponent
  },
  {
    path: 'denied',
    component: DeniedResourcesComponent
  },
  {
    path: 'send',
    component: SendResourcesComponent
  },
  {
    path: '',
    redirectTo: '/app/resources/inProgress',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'inProgress'
  }
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule]
})
export class ResourcesRoutingModule {}
