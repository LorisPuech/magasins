import { Component } from '@angular/core';

@Component({
    selector: 'magasin',
    template: ''
})

export class Magasin {
    constructor(
        public id: number,
        public name: string,
        public description: string
    ){}
}