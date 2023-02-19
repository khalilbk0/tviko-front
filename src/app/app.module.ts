import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { OwlModule } from 'ngx-owl-carousel';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SliderComponent } from './slider/slider.component';
import { AdsComponent } from './ads/ads.component';
import { DividerComponent } from './divider/divider.component'; 
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { ContactCompComponent } from './contact-comp/contact-comp.component';
import { FooterComponent } from './footer/footer.component';
import { CategoryComponent } from './category/category.component';
import { AdInfosComponent } from './ad-infos/ad-infos.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';  
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactPageComponent } from './contact-page/contact-page.component'; 
import { GalleryModule } from 'ng-gallery';
import { CarouselModule } from '@coreui/angular';
import { GALLERY_CONFIG } from 'ng-gallery';
import { GallerizeDirective } from 'ng-gallery/lightbox';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SliderComponent,
    AdsComponent,
    DividerComponent, 
    HomeComponent,
    ServicesComponent,
    ContactCompComponent,
    FooterComponent,
    CategoryComponent,
    AdInfosComponent,
    AboutUsComponent,
    ContactPageComponent
    
  ],
  imports: [
    BrowserModule, 
    BrowserAnimationsModule,
    CarouselModule,
    GalleryModule,
    
    AppRoutingModule,  
    
  ],
  providers: [
    {
      provide: GALLERY_CONFIG,
      useValue: {
        thumb:false,
        counter:false,
        dots: true,
        dotsSize:12 ,
        loadingStrategy: "preload" ,
        imageSize: 'cover' , 
      }
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
