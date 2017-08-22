import {NgModule, Optional, SkipSelf} from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import {SharedModule} from '../shared/shared.module'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpModule} from '@angular/http';

@NgModule({
  imports: [
    SharedModule,
    BrowserAnimationsModule,
    HttpModule
  ],
  declarations: [HeaderComponent, FooterComponent, SidebarComponent],
  exports: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent
  ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parent: CoreModule){
    if (parent) {
      throw new Error('Module Exists, Cant load again!');
    }
  }
}
