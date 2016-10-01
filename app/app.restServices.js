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
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var RestServices = (function () {
    function RestServices(http) {
        this.http = http;
    }
    RestServices.prototype.getJobDetails = function (clientName) {
        var params = new http_1.URLSearchParams();
        params.set("jobName", clientName ? clientName : "");
        return this.http.get('http://hyrdlt1118.es.ad.adp.com:9080/GLIquartz/do/getjobdetails', { search: params });
    };
    RestServices.prototype.createNewJob = function (jobData) {
        return this.http.put("http://hyrdlt1118.es.ad.adp.com:9080/GLIquartz/do/createjob", jobData);
    };
    RestServices.prototype.deleteMultipleJobs = function (jobCodes) {
        var params = new http_1.URLSearchParams();
        params.set("data", jobCodes);
        return this.http.delete("http://hyrdlt1118.es.ad.adp.com:9080/GLIquartz/do/deletejobs", { search: params });
    };
    RestServices.prototype.updateJob = function (jobData) {
        return this.http.post("http://hyrdlt1118.es.ad.adp.com:9080/GLIquartz/do/updatejob", jobData);
    };
    RestServices = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], RestServices);
    return RestServices;
}());
exports.RestServices = RestServices;
//# sourceMappingURL=app.restServices.js.map