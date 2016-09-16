/**
 * Created by kukapalv on 9/13/2016.
 */
import {Component, Input,NgFor,IterableDiffers} from "@angular/core";
import {default as APPconstants} from "./app.constant";

@Component({
    selector: 'ng2-grid',
    templateUrl: './app/view/ng2Grid.html',
    styleUrls: ['./app/css/custom.css'],
    directives: [NgFor]
})
export class Ng2Grid {
    @Input() rowData;
    private cdata: Array<string>;
    private cLength: number;
    private rows: Array<number>;
    private reqRowNum: number;
    private pagNa: any;
    private start: number;
    private end: number;
    private currPag: number;
    private remPag: number;

    constructor(private differs: IterableDiffers) {
        this.cdata = APPconstants.GRID_HEADERS;
        this.cLength = this.cdata.length + 1;
        this.rows = APPconstants.GRID_ROWS_PER_PAGE;
        this.reqRowNum = this.rows[0];
        this.pagNa = { firstBtn: true, prevBtn: true, nxtBtn: true, lastBtn: true };
        this.start = 0;
        this.checkCurrPage();
    }

    checkCurrPage() {
        if (this.currPag === this.remPag) {
            this.pagNa.nxtBtn = this.pagNa.lastBtn = true;
            this.pagNa.firstBtn = this.pagNa.prevBtn = false;
        } else if (this.currPag === 1) {
            this.pagNa.nxtBtn = this.pagNa.lastBtn = false;
            this.pagNa.firstBtn = this.pagNa.prevBtn = true;
        } else if (this.currPag > 1) {
            this.pagNa.nxtBtn = this.pagNa.lastBtn = this.pagNa.firstBtn = this.pagNa.prevBtn = false;
        }
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

    ngOnInit() {
        this.end = this.rowData.length;
    }
    ngDoCheck(){
        console.log();
    }
}