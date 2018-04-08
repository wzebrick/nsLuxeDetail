import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { CarouselComponent } from './carousel/carousel.component';
import { IntroComponent } from './carousel/intro/intro.component';
import { FormComponent } from './carousel/intro/form/form.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    CarouselComponent,
    IntroComponent,
    FormComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
