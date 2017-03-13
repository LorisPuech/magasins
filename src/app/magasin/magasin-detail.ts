import { Component, Input } from '@angular/core';
import { Magasin } from './magasin';

@Component({
    moduleId: module.id,
    selector: 'magasin-detail',
    templateUrl: './magasin.html',
    styleUrls: ['./magasin.css']
})

export class MagasinDetail {
    @Input()
    mag = Magasin;
}