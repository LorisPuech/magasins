import { Component } from '@angular/core';
import { Magasin } from './magasin';

@Component({
    moduleId: module.id,
    selector: 'magasin-data',
    templateUrl: 'magasin-list.html',
    styleUrls: ['./magasin-list.css']
})

export class MagasinData {
    shops = [
        new Magasin(1, 'Carrefour', 'Grande surface'),
        new Magasin(2, 'Synergee', 'Solution de pilotage d\'un réseau de franchise'),
        new Magasin(3, 'AGT Retail', 'Une des société à l\'origine de Synergee'),
        new Magasin(4, 'Retail Drive', 'Seconde société à l\'origine du projet Synergee'),
        new Magasin(5, 'Midas', 'Société automobile'),
    ];
    myShop = this.shops[0];

    selectedMag: Magasin;

    selectMag(mag: Magasin): void {
        this.selectedMag = mag;
    }
}