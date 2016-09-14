/**
 * Created by kukapalv on 9/13/2016.
 */
import {Component} from "@angular/core";
import {default as APPconstants} from "./app.constant";
@Component({
    selector: 'ng2-grid',
    templateUrl: './app/view/ng2Grid.html',
    styleUrls: ['./app/css/custom.css'],
})
export class Ng2Grid {

    private cdata: Array<string>;
    private cLength: number;
    private _rdata: Array<Object>;
    private rows: Array<number>;
    private reqRowNum: number;
    private pagNa: Object;

    get rdata(): Array<Object> {
        return this._rdata;
    }

    set rdata(value: Array<Object>) {
        this._rdata = value;
    }

    constructor() {
        this.cdata = APPconstants.GRID_HEADERS;
        this.cLength = this.cdata.length + 1;
        this.rows = APPconstants.GRID_ROWS_PER_PAGE;
        this._rdata =[];
        this.reqRowNum = this.rows[0];
        this.pagNa = {firstBtn: true, prevBtn: true, nxtBtn: true, lastBtn: true};
        console.log("inside ng2 grid consrtuctor");
    }

    deleteJobs() {

    }

    toggleAll() {

    }

    toggleCheck() {

    }

    first() {

    }

    prev() {

    }

    nxt() {

    }

    last() {

    }

    onChangeRowNum() {

    }
}