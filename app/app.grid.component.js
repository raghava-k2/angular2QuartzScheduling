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
/**
 * Created by kukapalv on 9/13/2016.
 */
var core_1 = require("@angular/core");
var app_constant_1 = require("./app.constant");
var Ng2Grid = (function () {
    function Ng2Grid(differs) {
        this.differs = differs;
        this.cdata = app_constant_1.default.GRID_HEADERS;
        this.cLength = this.cdata.length + 1;
        this.rows = app_constant_1.default.GRID_ROWS_PER_PAGE;
        this.reqRowNum = this.rows[0];
        this.pagNa = { firstBtn: true, prevBtn: true, nxtBtn: true, lastBtn: true };
        this.start = 0;
        this.checkCurrPage();
    }
    Ng2Grid.prototype.checkCurrPage = function () {
        if (this.currPag === this.remPag) {
            this.pagNa.nxtBtn = this.pagNa.lastBtn = true;
            this.pagNa.firstBtn = this.pagNa.prevBtn = false;
        }
        else if (this.currPag === 1) {
            this.pagNa.nxtBtn = this.pagNa.lastBtn = false;
            this.pagNa.firstBtn = this.pagNa.prevBtn = true;
        }
        else if (this.currPag > 1) {
            this.pagNa.nxtBtn = this.pagNa.lastBtn = this.pagNa.firstBtn = this.pagNa.prevBtn = false;
        }
    };
    Ng2Grid.prototype.deleteJobs = function () {
    };
    Ng2Grid.prototype.toggleAll = function () {
    };
    Ng2Grid.prototype.toggleCheck = function () {
    };
    Ng2Grid.prototype.first = function () {
    };
    Ng2Grid.prototype.prev = function () {
    };
    Ng2Grid.prototype.nxt = function () {
    };
    Ng2Grid.prototype.last = function () {
    };
    Ng2Grid.prototype.onChangeRowNum = function () {
    };
    Ng2Grid.prototype.ngOnInit = function () {
        this.end = this.rowData.length;
    };
    Ng2Grid.prototype.ngDoCheck = function () {
        console.log();
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], Ng2Grid.prototype, "rowData", void 0);
    Ng2Grid = __decorate([
        core_1.Component({
            selector: 'ng2-grid',
            templateUrl: './app/view/ng2Grid.html',
            styleUrls: ['./app/css/custom.css'],
            directives: [core_1.NgFor]
        }), 
        __metadata('design:paramtypes', [core_1.IterableDiffers])
    ], Ng2Grid);
    return Ng2Grid;
}());
exports.Ng2Grid = Ng2Grid;
//# sourceMappingURL=app.grid.component.js.map