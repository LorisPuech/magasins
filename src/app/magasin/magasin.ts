import { Component, Input } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'magasin',
    templateUrl: './magasin.html',
    styleUrls: ['./magasin.css']
})

export class Magasin {
    constructor(
        public id: number,
        public name: string,
        public description: string
    ){}
}