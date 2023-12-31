import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ButtonModule} from "primeng/button";
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { Page404Component } from './layout/page404/page404.component';
import {MenubarModule} from "primeng/menubar";
import { LoginComponent } from './layout/login/login.component';
import {PasswordModule} from "primeng/password";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CheckboxModule} from "primeng/checkbox";
import {CardModule} from "primeng/card";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {InputTextModule} from "primeng/inputtext";
import {HomeComponent} from "./layout/home/home.component";
import {DataViewModule} from "primeng/dataview";
import {RatingModule} from "primeng/rating";
import {TagModule} from "primeng/tag";
import {AuthInterceptor} from "./core/interceptor/auth.interceptor";
import {ShoppingModule} from "./shopping/shopping.module";
import {BadgeModule} from "primeng/badge";
import {MenuModule} from "primeng/menu";
import {OverlayModule} from "primeng/overlay";
import {DividerModule} from "primeng/divider";
import {ToastModule} from "primeng/toast";
import {MessagesModule} from "primeng/messages";
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import {SidebarModule} from "primeng/sidebar";
import {RippleModule} from "primeng/ripple";
import {StyleClassModule} from "primeng/styleclass";
import {TieredMenuModule} from "primeng/tieredmenu";
import {ProgressSpinnerModule} from "primeng/progressspinner";
import {MessageModule} from "primeng/message";
import {AvailableDirective} from "./shopping/directives/available.directive";
import { ShoppingPayementComponent } from './shopping/shopping-payement/shopping-payement.component';
import {DialogModule} from "primeng/dialog";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    Page404Component,
    LoginComponent,
    SidebarComponent,
    ShoppingPayementComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    ButtonModule,
    MenubarModule,
    PasswordModule,
    FormsModule,
    CheckboxModule,
    CardModule,
    InputTextModule,
    DataViewModule,
    RatingModule,
    TagModule,
    ShoppingModule,
    BadgeModule,
    MenuModule,
    OverlayModule,
    DividerModule,
    ToastModule,
    MessagesModule,
    SidebarModule,
    RippleModule,
    StyleClassModule,
    TieredMenuModule,
    ProgressSpinnerModule,
    MessageModule,
    DialogModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}
  ],
  exports: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
