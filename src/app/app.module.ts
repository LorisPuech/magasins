import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent }  from './app.component';
import { MagasinData } from './magasin/magasin-data';
import { MagasinDetail } from './magasin/magasin-detail';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, MagasinData, MagasinDetail ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
