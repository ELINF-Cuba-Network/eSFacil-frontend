import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { SharedModule } from "../@shared/shared.module";

import { AppComponent } from "./app.component";
import { LoginComponent } from "./components/user/login/login.component";
import { LogoutComponent } from "./components/user/logout/logout.component";
import { AppRoutingModule } from "./app-routing.module";

import { UserComponent } from "./components/user/user.component";
import { InformationService } from "../information.service";
import {
  ShowOnDirtyErrorStateMatcher,
  ErrorStateMatcher
} from "@angular/material";

@NgModule({
  declarations: [AppComponent, LoginComponent, UserComponent, LogoutComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule
  ],
  providers: [
    InformationService,
    ErrorStateMatcher,
    ShowOnDirtyErrorStateMatcher
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
