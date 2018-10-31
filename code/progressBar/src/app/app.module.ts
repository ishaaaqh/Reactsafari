import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { NgProgressModule } from 'ngx-progressbar';

import { AppComponent } from './app.component';
import { ProgressComponent } from './progress/progress.component';

@NgModule({
  declarations: [
    AppComponent,
    ProgressComponent
  ],
  imports: [
    BrowserModule,
    // NgProgressModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
