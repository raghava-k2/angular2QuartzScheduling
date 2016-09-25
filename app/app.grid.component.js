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
    function Ng2Grid() {
        this.addJobs = new core_1.EventEmitter();
        this.cdata = app_constant_1.default.GRID_HEADERS;
        this.cLength = this.cdata.length + 1;
        this.rows = app_constant_1.default.GRID_ROWS_PER_PAGE;
        this.reqRowNum = this.rows[0];
        this.pagNa = { firstBtn: true, prevBtn: true, nxtBtn: true, lastBtn: true };
        this.start = 0;
        this.currPag = 1;
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
        this.checkRowCount();
    };
    Ng2Grid.prototype.addJob = function (event) {
        this.addJobs.emit(event);
    };
    Ng2Grid.prototype.deleteJobs = function () {
    };
    Ng2Grid.prototype.toggleAll = function (event) {
        this.rowData.forEach(function (object, idx) {
            object.checked = event.target.checked;
        });
    };
    Ng2Grid.prototype.toggleCheck = function () {
    };
    Ng2Grid.prototype.first = function () {
        this.currPag = 1;
        this.start = this.reqRowNum * (this.currPag - 1);
        this.end = this.reqRowNum * this.currPag;
        this.checkCurrPage();
    };
    Ng2Grid.prototype.prev = function () {
        this.currPag--;
        this.start = this.reqRowNum * (this.currPag - 1);
        this.end = this.reqRowNum * this.currPag;
        this.checkCurrPage();
    };
    Ng2Grid.prototype.nxt = function () {
        this.currPag++;
        this.start = this.reqRowNum * (this.currPag - 1);
        this.end = this.reqRowNum * this.currPag;
        this.checkCurrPage();
    };
    Ng2Grid.prototype.last = function () {
        this.currPag = this.remPag;
        this.start = this.reqRowNum * (this.currPag - 1);
        this.end = this.reqRowNum * this.currPag;
        this.checkCurrPage();
    };
    Ng2Grid.prototype.onChangeRowNum = function (event) {
        if (this.currPag === this.remPag) {
            this.remPag = Math.ceil(this.rowData.length / this.reqRowNum);
            this.currPag = this.remPag;
        }
        else {
            this.remPag = Math.ceil(this.rowData.length / this.reqRowNum);
            this.currPag = 1;
        }
        this.start = this.reqRowNum * (this.currPag - 1);
        this.end = this.reqRowNum * this.currPag;
        this.checkCurrPage();
    };
    Ng2Grid.prototype.ngOnChanges = function () {
        this.end = this.reqRowNum;
        this.remPag = Math.ceil(this.rowData.length / this.reqRowNum);
        if (this.rowData) {
            this.rowData.forEach(function (object, idx) {
                object.id = idx + 1;
                object.checked = false;
            });
        }
        this.checkCurrPage();
    };
    Ng2Grid.prototype.checkRowCount = function () {
        if (this.rowData.length <= this.reqRowNum) {
            this.pagNa.nxtBtn = this.pagNa.lastBtn = true;
            this.pagNa.firstBtn = this.pagNa.prevBtn = true;
        }
    };
    ;
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], Ng2Grid.prototype, "rowData", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], Ng2Grid.prototype, "addJobs", void 0);
    Ng2Grid = __decorate([
        core_1.Component({
            selector: 'ng2-grid',
            templateUrl: './app/view/ng2Grid.html',
            styleUrls: ['./app/css/custom.css'],
        }), 
        __metadata('design:paramtypes', [])
    ], Ng2Grid);
    return Ng2Grid;
}());
exports.Ng2Grid = Ng2Grid;
//# sourceMappingURL=app.grid.component.js.map