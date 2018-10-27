import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from "@angular/http";
import { FormsModule }   from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { FileService } from '../providers';
import { PathService } from '../providers';
import { MaterialModule } from './components/material-components/material.module';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { ConfigModalComponent } from './components/config-modal/config-modal.component';
import { HomeComponent } from './views/home';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    HomeComponent,
    ConfigModalComponent
  ],
  entryComponents: [ConfigModalComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    AppRoutingModule,
    MaterialModule,
    FormsModule
  ],
  providers: [FileService, PathService],
  bootstrap: [AppComponent]
})
export class AppModule { }
