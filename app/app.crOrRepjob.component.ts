/**
 * Created by kukapalv on 9/13/2016.
 */
import {Component, Input, Output, EventEmitter} from "@angular/core";
import {default as APPconstants} from "./app.constant";
import {RestServices} from "./app.restServices";
import {KeysPipe} from "./app.pipes.component";
@Component({
    selector: "create-job",
    providers: [RestServices],
    templateUrl: "./app/view/crOrRepJob.html",
    styleUrls: ['./app/css/custom.css']
})
export class CreateOrReplaceJob {
    @Input() create: string;
    @Output() closeModal = new EventEmitter<boolean>();
    private job: any;
    private status: Object;
    constructor(private jobService: RestServices) {
        this.job = { glInfo: {} };
        this.job.weeks = APPconstants.WEEKS.slice();
        this.job.months = APPconstants.MONTHS.slice();
        this.status = { show: true, message: "" };
    }
    goBack(event: any) {
        this.job = { glInfo: {}, weeks: APPconstants.WEEKS.slice(), months: APPconstants.MONTHS.slice() };
        this.closeModal.emit(event);
    }
    createOrUpdateJob() {
        console.log(this);
    }

    private createNewJob() {
        this.job.jobExeDays = this.getSelectedDays();
        this.job.jobExeMonths = this.getSelectedMonths();
        this.job.jobDateTime = this.trimDate(new Date(this.job.jobDateTime));
        this.job.jobEndtime = this.trimDate(new Date(this.job.jobEndtime));
        this.jobService.createNewJob(this.job).subscribe((response) => {
            response.json();
        });
    }
    private getSelectedDays() {
        return this.job.weeks.map(function (obj, idx) {
            if (obj[Object.keys(obj)[0]])
                return (idx + 1);
        });
    }
    private getSelectedMonths() {
        return this.job.months.map(function (obj, idx) {
            if (obj[Object.keys(obj)[0]])
                return idx;
        });
    }
    private trimDate(obj) {
        return obj ? obj.toString().substring(0, obj.toString().lastIndexOf(':') + 3) : '';
    }
}