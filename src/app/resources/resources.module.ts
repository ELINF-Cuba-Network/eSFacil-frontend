import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ResourcesRoutingModule } from "./resources-routing.module";
import { SharedModule } from "../@shared/shared.module";
import { ResourceDetailsComponent } from "./components/resource-details/resource-details.component";
import { FileUploadComponent } from "./components/file-upload/file-upload.component";
import { ResourceTableComponent } from "./components/resource-table/resource-table.component";
import { ResourceSelectionDispatcherService } from "./services/resource-selection-dispatcher.service";
import { AcceptedResourcesComponent } from "./components/accepted-resources/accepted-resources.component";
import { DeniedResourcesComponent } from "./components/denied-resources/denied-resources.component";
import { SendResourcesComponent } from "./components/send-resources/send-resources.component";
import { InProcessResourcesComponent } from "./components/in-process-resources/in-process-resources.component";

@NgModule({
  imports: [CommonModule, SharedModule, ResourcesRoutingModule],
  declarations: [
    ResourceDetailsComponent,
    FileUploadComponent,
    ResourceTableComponent,
    AcceptedResourcesComponent,
    DeniedResourcesComponent,
    SendResourcesComponent,
    InProcessResourcesComponent
  ],
  providers: [ResourceSelectionDispatcherService]
})
export class ResourcesModule {}
