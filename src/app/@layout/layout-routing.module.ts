import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LayoutComponent } from "./components/layout/layout.component";

const ROUTES: Routes = [
  {
    path: "",
    component: LayoutComponent,
    children: [
      {
        path: "resources",
        loadChildren: "../resources/resources.module#ResourcesModule"
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule]
})
export class LayoutRoutingModule {}