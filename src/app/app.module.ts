import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NgxTepalolUploaderModule} from "ngx-tepalol-uploader";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxTepalolUploaderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
