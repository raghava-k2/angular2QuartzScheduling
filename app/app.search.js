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
 * Created by kukapalv on 9/12/2016.
 */
var core_1 = require('@angular/core');
var app_loadData_1 = require("./app.loadData");
var AppSearch = (function () {
    function AppSearch(jobService) {
        this.jobService = jobService;
        console.log("inside search constructor");
    }
    AppSearch.prototype.getAllJobDetails = function () {
        console.log('inside search click event');
        console.log(this.jobService.getJobDetails());
    };
    AppSearch = __decorate([
        core_1.Component({
            selector: 'client-search',
            templateUrl: './app/view/search.html',
            providers: [app_loadData_1.LoadData],
            styles: ["main {\n\tborder-width: 10px;\n\tborder-color: darkkhaki;\n\tborder-style: solid;\n\tborder-radius: 7px;\n\tmargin: 10px;\n\tpadding: 20px;\n}"]
        }), 
        __metadata('design:paramtypes', [app_loadData_1.LoadData])
    ], AppSearch);
    return AppSearch;
}());
exports.AppSearch = AppSearch;
//# sourceMappingURL=app.search.js.map