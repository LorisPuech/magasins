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
var MagasinDetail = (function () {
    function MagasinDetail() {
    }
    MagasinDetail.prototype.ngOnInit = function () {
        if (this.mag != null) {
            console.log(this.mag.id);
        }
        else {
            console.log("Aucun magasin");
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', magasin_1.Magasin)
    ], MagasinDetail.prototype, "mag", void 0);
    MagasinDetail = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'magasin-detail',
            templateUrl: './magasin.html',
            styleUrls: ['./magasin.css'],
        }), 
        __metadata('design:paramtypes', [])
    ], MagasinDetail);
    return MagasinDetail;
}());
exports.MagasinDetail = MagasinDetail;
//# sourceMappingURL=magasin-detail.js.map