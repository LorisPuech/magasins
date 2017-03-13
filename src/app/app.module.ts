import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { Magasin } from './magasin/magasin';
import { MagasinData } from './magasin/magasin-data';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, Magasin, MagasinData ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
