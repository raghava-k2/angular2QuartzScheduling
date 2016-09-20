"use strict";
/**
 * Created by kukapalv on 9/14/2016.
 */
var APPconstants = (function () {
    function APPconstants() {
    }
    APPconstants.GRID_HEADERS = ["Id", "User Name", "Job Name", "Job Group Name", "Start Time", "Next Execute Time", "Status"];
    APPconstants.GRID_ROWS_PER_PAGE = [10, 20, 30, 40, 50];
    APPconstants.WEEKS = [{
            "sunday": true
        }, {
            "monday": true
        }, {
            "tuesday": true
        }, {
            "wednesday": true
        }, {
            "thrusday": true
        }, {
            "friday": true
        }, {
            "saturday": true
        }];
    APPconstants.MONTHS = [{
            "jan": true
        }, {
            "feb": true
        }, {
            "mar": true
        }, {
            "apr": true
        }, {
            "may": true
        }, {
            "jun": true
        }, {
            "jul": true
        }, {
            "aug": true
        }, {
            "sep": true
        }, {
            "oct": true
        }, {
            "nov": true
        }, {
            "dec": true
        }];
    return APPconstants;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = APPconstants;
//# sourceMappingURL=app.constant.js.map