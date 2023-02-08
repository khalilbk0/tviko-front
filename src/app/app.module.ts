import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SliderComponent } from './slider/slider.component';
import { AdsComponent } from './ads/ads.component';
import { DividerComponent } from './divider/divider.component';
import { Ads2Component } from './ads2/ads2.component';
import { Ads3Component } from './ads3/ads3.component';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { ContactCompComponent } from './contact-comp/contact-comp.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SliderComponent,
    AdsComponent,
    DividerComponent,
    Ads2Component,
    Ads3Component,
    HomeComponent,
    ServicesComponent,
    ContactCompComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
