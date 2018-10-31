import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PouchdbComponent } from './pouchdb/pouchdb.component';

@NgModule({
  declarations: [
    AppComponent,
    PouchdbComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
