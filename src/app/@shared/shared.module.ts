import { NgModule } from "@angular/core";

import { MatBadgeModule } from "@angular/material/badge";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatChipsModule } from "@angular/material/chips";
import { MatDialogModule } from "@angular/material/dialog";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatListModule } from "@angular/material/list";
import { MatMenuModule } from "@angular/material/menu";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatRadioModule } from "@angular/material/radio";
import { MatSelectModule } from "@angular/material/select";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatSortModule } from "@angular/material/sort";
import { MatStepperModule } from "@angular/material/stepper";
import { MatTableModule } from "@angular/material/table";
import { MatTabsModule } from "@angular/material/tabs";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatTooltipModule } from "@angular/material/tooltip";
import { EllipsisPipe } from "./pipes/ellipsis.pipe";
import { MaterialFileInputComponent } from "./components/material-file-input/material-file-input.component";
import { CommonModule } from "@angular/common";
import { AddCommasPipe } from "./pipes/add-commas.pipe";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ShareDataService } from './services/share-data.service';
import { FlexLayoutModule } from '@angular/flex-layout';

const MATERIAL_MODULES = [
  MatCardModule,
  MatInputModule,
  MatSelectModule,
  MatStepperModule,
  MatTabsModule,
  MatTableModule,
  MatExpansionModule,
  MatGridListModule,
  MatListModule,
  MatToolbarModule,
  MatMenuModule,
  MatButtonModule,
  MatChipsModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatDialogModule,
  MatIconModule,
  MatSlideToggleModule,
  MatCheckboxModule,
  MatRadioModule,
  MatSnackBarModule,
  MatSidenavModule,
  MatPaginatorModule,
  MatSortModule,
  MatTooltipModule,
  MatBadgeModule
];

@NgModule({
  imports: [
    ...MATERIAL_MODULES,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule
  ],
  exports: [
    FormsModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    ...MATERIAL_MODULES,
    EllipsisPipe,
    MaterialFileInputComponent,
    AddCommasPipe
  ],
  declarations: [
    EllipsisPipe,
    MaterialFileInputComponent,
    AddCommasPipe
  ]
})
export class SharedModule {}
