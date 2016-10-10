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
        this.status = {};
        this.status.show = true;
        this.status.message = "";
        this.is_update = false;
    }
    CreateOrReplaceJob.prototype.goBack = function (event) {
        this.job = { glInfo: {}, weeks: app_constant_1.default.WEEKS.slice(), months: app_constant_1.default.MONTHS.slice() };
        this.status.show = true;
        this.status.message = "";
        app_constant_1.default.IS_UPDATE = false;
        this.is_update = false;
        this.closeModal.emit(event);
    };
    CreateOrReplaceJob.prototype.createOrUpdateJob = function () {
        if (!app_constant_1.default.IS_UPDATE)
            this.createNewJob();
        else
            this.updateJob();
    };
    CreateOrReplaceJob.prototype.createNewJob = function () {
        var _this = this;
        this.createData();
        this.jobService.createNewJob(this.job).subscribe(function (response) {
            var json = response.json();
            if (json.status === "success") {
                _this.status.show = false;
                _this.status.message = "successfully created new job : " + _this.job.jobName;
            }
            else {
                _this.status.show = false;
                _this.status.message = json.msg;
            }
        });
    };
    CreateOrReplaceJob.prototype.updateJob = function () {
        var _this = this;
        this.createData();
        this.jobService.updateJob(this.job).subscribe(function (response) {
            var json = response.json();
            if (json.status === "success") {
                _this.status.show = false;
                _this.status.message = "successfully updated the job : " + _this.job.jobName;
            }
            else {
                _this.status.show = false;
                _this.status.message = json.msg;
            }
        });
    };
    CreateOrReplaceJob.prototype.createData = function () {
        this.job.jobExeDays = this.getSelectedDays();
        this.job.jobExeMonths = this.getSelectedMonths();
        this.job.jobDateTime = this.trimDate(this.job.jobDateTimeTemp ? this.converISODate(this.job.jobDateTimeTemp) : "");
        this.job.jobEndtime = this.trimDate(this.job.jobEndTimeTemp ? this.converISODate(this.job.jobEndTimeTemp) : "");
    };
    CreateOrReplaceJob.prototype.converISODate = function (obj) {
        var date = new Date(obj);
        date.setTime(date.getTime() - ((5 * 60 * 60 * 1000) + (1 * 30 * 60 * 1000)));
        return date;
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
    CreateOrReplaceJob.prototype.ngOnChanges = function () {
        if (this.create === "slide-modal") {
            if (app_constant_1.default.IS_UPDATE) {
                this.is_update = true;
                this.job = Object.assign({}, app_constant_1.default.UPDATE_JOB_DATA);
                this.job.weeks = this.setWeeks(this.job.jobExeDays);
                this.job.months = this.setMonths(this.job.jobExeMonths);
                this.job.jobDateTimeTemp = this.job.jobDateTime ? this.convertToISODate(this.job.jobDateTime) : "";
                this.job.jobEndTimeTemp = this.job.jobEndtime ? this.convertToISODate(this.job.jobEndtime) : "";
            }
        }
    };
    CreateOrReplaceJob.prototype.convertToISODate = function (obj) {
        var date = new Date(obj);
        date.setTime(date.getTime() + ((5 * 60 * 60 * 1000) + (1 * 30 * 60 * 1000)));
        return date.toISOString().slice(0, 16);
    };
    CreateOrReplaceJob.prototype.setWeeks = function (days) {
        var weeks = app_constant_1.default.WEEKS.slice();
        if (days) {
            if ((days[0] === '*'))
                return weeks;
            else
                weeks.map(function (obj, idx) {
                    var index = days.findIndex(function (val) {
                        return parseInt(val) === (idx + 1);
                    });
                    if (index == -1)
                        obj[Object.keys(obj)[0]] = false;
                });
        }
        return weeks;
    };
    CreateOrReplaceJob.prototype.setMonths = function (months) {
        var tempMonths = app_constant_1.default.MONTHS.slice();
        if (months)
            if ((months[0] === '*'))
                return tempMonths;
            else
                tempMonths.map(function (obj, idx) {
                    var index = months.findIndex(function (val) {
                        return parseInt(val) === idx;
                    });
                    if (index == -1)
                        obj[Object.keys(obj)[0]] = false;
                });
        return tempMonths;
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