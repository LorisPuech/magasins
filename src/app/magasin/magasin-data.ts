import { Component, OnInit } from '@angular/core';
import { Magasin } from './magasin';
import { MagasinDetail } from './magasin-detail';

@Component({
    moduleId: module.id,
    selector: 'magasin-data',
    templateUrl: 'magasin-list.html',
    styleUrls: ['./magasin-list.css']
})

export class MagasinData implements OnInit{
    shops = [
        new Magasin(1, 'Carrefour', 'Grande surface'),
        new Magasin(2, 'Synergee', 'Solution de pilotage d\'un réseau de franchise'),
        new Magasin(3, 'AGT Retail', 'Une des société à l\'origine de Synergee'),
        new Magasin(4, 'Retail Drive', 'Seconde société à l\'origine du projet Synergee'),
        new Magasin(5, 'Midas', 'Société automobile'),
    ];

    ngOnInit(){
        this.selectMag(this.shops[0]);
    }

    selectedMagasin: Magasin;

    private selectMag(event: Magasin) {
        this.selectedMagasin = event;
        console.log(event);
        console.log(event.description);
        console.log(event.id);
        console.log(event.name);
    }    
}