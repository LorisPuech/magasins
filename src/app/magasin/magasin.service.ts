import { Injectable } from '@angular/core';

import { Magasin } from './magasin';
import { SHOPS } from './mock-magasin';

@Injectable()
export class MagasinService {
    getMagasin(): Promise<Magasin[]> { 
        return Promise.resolve(SHOPS);
     }
}