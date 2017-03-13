import { Component, Input, OnInit } from '@angular/core';
import { Magasin } from './magasin';

@Component({
    moduleId: module.id,
    selector: 'magasin-detail',
    templateUrl: './magasin.html',
    styleUrls: ['./magasin.css'],
})

export class MagasinDetail implements OnInit {
    @Input() mag: Magasin;

    ngOnInit(){
        if(this.mag != null){
            console.log(this.mag.id);
        }else{
            console.log("Aucun magasin");
        }
    }
}