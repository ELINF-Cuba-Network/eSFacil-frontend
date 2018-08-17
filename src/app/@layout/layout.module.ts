import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LayoutComponent } from "./components/layout/layout.component";
import { LayoutRoutingModule } from "./layout-routing.module";
import { SharedModule } from "../@shared/shared.module";
import { SidebarComponent } from "./components/sidebar/sidebar.component";

@NgModule({
  imports: [CommonModule, SharedModule, LayoutRoutingModule],
  declarations: [LayoutComponent, SidebarComponent]
})
export class LayoutModule {}
