/**
 * Created by kukapalv on 9/14/2016.
 */
export default class APPconstants {
    static GRID_HEADERS: Array<string> = ["Id", "User Name", "Job Name", "Job Group Name", "Start Time", "Next Execute Time", "Status"];
    static GRID_ROWS_PER_PAGE: Array<number> = [10, 20, 30, 40, 50];
    static WEEKS: Array<Object> = [{
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
    static MONTHS: Array<Object> = [{
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
        }]
}