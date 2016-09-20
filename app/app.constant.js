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
            "SUN": true
        }, {
            "MON": true
        }, {
            "TUE": true
        }, {
            "WED": true
        }, {
            "THR": true
        }, {
            "FRI": true
        }, {
            "SAT": true
        }];
    APPconstants.MONTHS = [{
            "JAN": true
        }, {
            "FEB": true
        }, {
            "MAR": true
        }, {
            "APR": true
        }, {
            "MAY": true
        }, {
            "JUN": true
        }, {
            "JUL": true
        }, {
            "AUG": true
        }, {
            "SEP": true
        }, {
            "OCT": true
        }, {
            "NOv": true
        }, {
            "DEC": true
        }];
    return APPconstants;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = APPconstants;
//# sourceMappingURL=app.constant.js.map