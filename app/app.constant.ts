/**
 * Created by kukapalv on 9/14/2016.
 */
export default class APPconstants {
    static GRID_HEADERS: Array<string> = ["Id", "User Name", "Job Name", "Job Group Name", "Start Time", "Next Execute Time", "Status"];
    static GRID_ROWS_PER_PAGE: Array<number> = [10, 20, 30, 40, 50];
    static WEEKS: Array<Object> = [{
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
    static MONTHS: Array<Object> = [{
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
        }]
}