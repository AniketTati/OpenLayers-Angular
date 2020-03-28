import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { Map2Component } from './map2/map2.component';
import { Map3Component } from './map3/map3.component';


@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    Map2Component,
    Map3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
