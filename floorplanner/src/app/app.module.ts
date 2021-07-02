import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { DxVectorMapModule } from 'devextreme-angular';

import { AppComponent } from './app.component';

@NgModule({
  imports: [
      BrowserModule,
      DxVectorMapModule
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);