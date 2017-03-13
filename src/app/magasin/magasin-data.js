"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var magasin_1 = require('./magasin');
var MagasinData = (function () {
    function MagasinData() {
        this.shops = [
            new magasin_1.Magasin(1, 'Carrefour', 'Grande surface'),
            new magasin_1.Magasin(2, 'Synergee', 'Solution de pilotage d\'un réseau de franchise'),
            new magasin_1.Magasin(3, 'AGT Retail', 'Une des société à l\'origine de Synergee'),
            new magasin_1.Magasin(4, 'Retail Drive', 'Seconde société à l\'origine du projet Synergee'),
            new magasin_1.Magasin(5, 'Midas', 'Société automobile'),
        ];
    }
    MagasinData.prototype.ngOnInit = function () {
        this.selectMag(this.shops[0]);
    };
    MagasinData.prototype.selectMag = function (event) {
        this.selectedMagasin = event;
    };
    MagasinData = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'magasin-data',
            templateUrl: 'magasin-list.html',
            styleUrls: ['./magasin-list.css']
        }), 
        __metadata('design:paramtypes', [])
    ], MagasinData);
    return MagasinData;
}());
exports.MagasinData = MagasinData;
//# sourceMappingURL=magasin-data.js.map