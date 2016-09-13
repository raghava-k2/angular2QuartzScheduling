/**
 * Created by kukapalv on 9/13/2016.
 */
import {Component} from "@angular/core";
@Component({
    selector: 'ng2-grid',
    templateUrl: './app/view/ng2Grid.html',
    styleUrls: ['./app/css/custom.css']
})
export class Ng2Grid {
    private cdata: Array<string>;
    private rdata: Array<Object>;
    private rows: Array<number>;
    private reqRowNum: number;
    private pagNa: Object;

    constructor() {
        this.cdata = ['ID', 'Name'];
        this.rdata = [{"id": 1, "userName": "raghava"}];
        this.rows = [10, 20, 30, 40, 50];
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