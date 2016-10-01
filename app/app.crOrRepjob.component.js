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
var app_restServices_1 = require("./app.restServices");
var CreateOrReplaceJob = (function () {
    function CreateOrReplaceJob(jobService) {
        this.jobService = jobService;
        this.closeModal = new core_1.EventEmitter();
        this.job = { glInfo: {} };
        this.job.weeks = app_constant_1.default.WEEKS.slice();
        this.job.months = app_constant_1.default.MONTHS.slice();
        this.status = { show: true, message: "" };
    }
    CreateOrReplaceJob.prototype.goBack = function (event) {
        this.job = { glInfo: {}, weeks: app_constant_1.default.WEEKS.slice(), months: app_constant_1.default.MONTHS.slice() };
        this.closeModal.emit(event);
    };
    CreateOrReplaceJob.prototype.createOrUpdateJob = function () {
        console.log(this);
    };
    CreateOrReplaceJob.prototype.createNewJob = function () {
        this.job.jobExeDays = this.getSelectedDays();
        this.job.jobExeMonths = this.getSelectedMonths();
        this.job.jobDateTime = this.trimDate(new Date(this.job.jobDateTime));
        this.job.jobEndtime = this.trimDate(new Date(this.job.jobEndtime));
        this.jobService.createNewJob(this.job).subscribe(function (response) {
            response.json();
        });
    };
    CreateOrReplaceJob.prototype.getSelectedDays = function () {
        return this.job.weeks.map(function (obj, idx) {
            if (obj[Object.keys(obj)[0]])
                return (idx + 1);
        });
    };
    CreateOrReplaceJob.prototype.getSelectedMonths = function () {
        return this.job.months.map(function (obj, idx) {
            if (obj[Object.keys(obj)[0]])
                return idx;
        });
    };
    CreateOrReplaceJob.prototype.trimDate = function (obj) {
        return obj ? obj.toString().substring(0, obj.toString().lastIndexOf(':') + 3) : '';
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], CreateOrReplaceJob.prototype, "create", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], CreateOrReplaceJob.prototype, "closeModal", void 0);
    CreateOrReplaceJob = __decorate([
        core_1.Component({
            selector: "create-job",
            providers: [app_restServices_1.RestServices],
            templateUrl: "./app/view/crOrRepJob.html",
            styleUrls: ['./app/css/custom.css']
        }), 
        __metadata('design:paramtypes', [app_restServices_1.RestServices])
    ], CreateOrReplaceJob);
    return CreateOrReplaceJob;
}());
exports.CreateOrReplaceJob = CreateOrReplaceJob;
//# sourceMappingURL=app.crOrRepjob.component.js.map