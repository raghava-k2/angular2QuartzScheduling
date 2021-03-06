/**
 * Created by kukapalv on 9/13/2016.
 */
import {Component, Input, Output, EventEmitter} from "@angular/core";
import {default as APPconstants} from "./app.constant";
import {RestServices} from "./app.restServices";
@Component({
    selector: 'ng2-grid',
    templateUrl: './app/view/ng2Grid.html',
    styleUrls: ['./app/css/custom.css'],
    providers: [RestServices]
})
export class Ng2Grid {
    @Input() rowData: Array<Object>;
    @Output() addJobs = new EventEmitter<boolean>();
    @Output() deleteJob = new EventEmitter<any>();
    private cdata: Array<string>;
    private cLength: number;
    private rows: Array<number>;
    private reqRowNum: number;
    private pagNa: any;
    private start: number;
    private end: number;
    private currPag: number;
    private remPag: number;

    constructor(private jobService: RestServices) {
        this.cdata = APPconstants.GRID_HEADERS;
        this.cLength = this.cdata.length + 1;
        this.rows = APPconstants.GRID_ROWS_PER_PAGE;
        this.reqRowNum = this.rows[0];
        this.pagNa = { firstBtn: true, prevBtn: true, nxtBtn: true, lastBtn: true };
        this.start = 0;
        this.currPag = 1;
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
        this.checkRowCount();
    }

    addJob(event: any) {
        this.addJobs.emit(event);
    }

    deleteJobs() {
        let map = new Map();
        this.rowData.map(function (object: any, idx: number) {
            if (object.checked)
                map.set(object.clientId, object.jobName);
        });
        this.jobService.deleteMultipleJobs(Array.from(map.keys())).subscribe((response) => {
            let json = response.json();
            if (json.status === "success") {
                this.deleteJob.emit(Array.from(map.values()));
            }
            else {
                this.deleteJob.emit(json.msg);
            }
        });
    }

    toggleAll(event: any) {
        this.rowData.forEach(function (object: any, idx: number) {
            object.checked = event.target.checked;
        });
    }

    toggleCheck() {
    }

    first() {
        this.currPag = 1;
        this.start = this.reqRowNum * (this.currPag - 1);
        this.end = this.reqRowNum * this.currPag;
        this.checkCurrPage();
    }

    prev() {
        this.currPag--;
        this.start = this.reqRowNum * (this.currPag - 1);
        this.end = this.reqRowNum * this.currPag;
        this.checkCurrPage();
    }

    nxt() {
        this.currPag++;
        this.start = this.reqRowNum * (this.currPag - 1);
        this.end = this.reqRowNum * this.currPag;
        this.checkCurrPage();
    }

    last() {
        this.currPag = this.remPag;
        this.start = this.reqRowNum * (this.currPag - 1);
        this.end = this.reqRowNum * this.currPag;
        this.checkCurrPage();
    }

    onChangeRowNum(event: any) {
        if (this.currPag === this.remPag) {
            this.remPag = Math.ceil(this.rowData.length / this.reqRowNum);
            this.currPag = this.remPag;
        } else {
            this.remPag = Math.ceil(this.rowData.length / this.reqRowNum);
            this.currPag = 1;
        }
        this.start = this.reqRowNum * (this.currPag - 1);
        this.end = this.reqRowNum * this.currPag;
        this.checkCurrPage();
    }

    ngOnChanges() {
        this.end = this.reqRowNum;
        this.remPag = Math.ceil(this.rowData.length / this.reqRowNum);
        if (this.rowData) {
            this.rowData.forEach(function (object: any, idx: number) {
                object.id = idx + 1;
                object.checked = false;
            });
        }
        this.checkCurrPage();
    }

    checkRowCount() {
        if (this.rowData.length <= this.reqRowNum) {
            this.pagNa.nxtBtn = this.pagNa.lastBtn = true;
            this.pagNa.firstBtn = this.pagNa.prevBtn = true;
        }
    }

    editJobDetails(obj: number) {
        APPconstants.IS_UPDATE = true;
        APPconstants.UPDATE_JOB_DATA = this.rowData[obj];
        this.addJobs.emit(true);
    }
}