import { Component, OnInit } from '@angular/core';
import { Magasin } from './magasin';
import { MagasinService } from './magasin.service';

@Component({
    moduleId: module.id,
    selector: 'magasin-data',
    templateUrl: 'magasin-list.html',
    styleUrls: ['./magasin-list.css'],
    providers: [MagasinService]
})

export class MagasinData implements OnInit{
    constructor(private magasinService: MagasinService) { }
    shops: Magasin[];

    ngOnInit(): void { 
        this.getShops();
    }

    getShops(): void {
        this.magasinService.getMagasin().then(shops => this.shops = shops);
    }

    public selectMag(event: any): void {
        this.selectedMagasin = event;
    }

    selectedMagasin: Magasin;
    
}