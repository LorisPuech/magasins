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
var magasin_service_1 = require('./magasin.service');
var MagasinData = (function () {
    function MagasinData(magasinService) {
        this.magasinService = magasinService;
        this.model = 'Sélectionner un magasin';
    }
    MagasinData.prototype.ngOnInit = function () {
        this.getShops();
    };
    MagasinData.prototype.getShops = function () {
        var _this = this;
        this.magasinService.getMagasin().then(function (shops) { return _this.shops = shops; });
    };
    MagasinData.prototype.selectMag = function (event) {
        this.selectedMagasin = event;
    };
    MagasinData = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'magasin-data',
            templateUrl: 'magasin-list.html',
            styleUrls: ['./magasin-list.css'],
            providers: [magasin_service_1.MagasinService]
        }), 
        __metadata('design:paramtypes', [magasin_service_1.MagasinService])
    ], MagasinData);
    return MagasinData;
}());
exports.MagasinData = MagasinData;
//# sourceMappingURL=magasin-data.js.map