import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NouisliderModule } from 'ng2-nouislider';
  // import {BrowserModule} from '@angular/platform-browser';
// import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {DatePipe} from '@angular/common';



import { AppComponent } from './app.component';
import { SliderComponent } from './slider/slider.component';

@NgModule({
  declarations: [
    AppComponent,
    SliderComponent
  ],
  imports: [
    BrowserModule,
    NouisliderModule
  ],
  providers: [],
  bootstrap: [AppComponent] 
})
export class AppModule { }
