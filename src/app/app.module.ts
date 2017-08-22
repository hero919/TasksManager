import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {CoreModule} from './core/core.module'
import {MdSidenavModule} from '@angular/material'
import {AppRoutingModule} from './app-routing.module'
import { AppComponent } from './app.component';
import {LoginModule} from './login/login.module';
import {ProjectModule} from "./project/project.module";
import {TaskModule} from "./task/task.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    MdSidenavModule,
    LoginModule,
    ProjectModule,
    TaskModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
