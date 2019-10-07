import { NgModule } from "@angular/core";

import {
  MatCardModule,
  MatSelectModule,
  MatStepperModule,
  MatTabsModule,
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
  MatCheckboxModule,
  MatRadioModule,
  MatTableModule,
  MatSnackBarModule,
  MatSlideToggleModule,
  MatInputModule,
  MatSidenavModule,
  MatPaginatorModule,
  MatSortModule,
  MatTooltipModule,
  MatBadgeModule
} from "@angular/material";
import { EllipsisPipe } from "./pipes/ellipsis.pipe";
import { MaterialFileInputComponent } from "./components/material-file-input/material-file-input.component";
import { CommonModule } from "@angular/common";
import { AddCommasPipe } from "./pipes/add-commas.pipe";

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
  imports: [...MATERIAL_MODULES, CommonModule],
  exports: [
    ...MATERIAL_MODULES,
    EllipsisPipe,
    MaterialFileInputComponent,
    AddCommasPipe
  ],
  declarations: [EllipsisPipe, MaterialFileInputComponent, AddCommasPipe]
})
export class SharedModule {}
