import { Component } from '@angular/core';

import { Magasin } from './magasin/magasin';
import { MagasinData } from './magasin/magasin-data';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent  { 
  name = 'Angular';
}
