import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MainSectionComponent } from './main-section/main-section.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SectionAComponent } from './main-section/section-a/section-a.component';
import { SectionBComponent } from './main-section/section-b/section-b.component';
import { SectionCComponent } from './main-section/section-c/section-c.component';
import { SectionDComponent } from './main-section/section-d/section-d.component';
import { SectionEComponent } from './main-section/section-e/section-e.component';
import { SectionFComponent } from './main-section/section-f/section-f.component';
import { HeaderSectionComponent } from './header-section/header-section.component';
import { FooterSectionComponent } from './footer-section/footer-section.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderSectionComponent,
    FooterSectionComponent,
    MainSectionComponent,
    SectionAComponent,
    SectionBComponent,
    SectionCComponent,
    SectionDComponent,
    SectionEComponent,
    SectionFComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,    
    CarouselModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
