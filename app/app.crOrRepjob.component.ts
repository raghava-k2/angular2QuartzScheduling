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
    private status: any;
    private is_update: boolean;
    constructor(private jobService: RestServices) {
        this.job = { glInfo: {} };
        this.job.weeks = APPconstants.WEEKS.slice();
        this.job.months = APPconstants.MONTHS.slice();
        this.status = {};
        this.status.show = true;
        this.status.message = "";
        this.is_update = false;
    }
    goBack(event: any) {
        this.job = { glInfo: {}, weeks: APPconstants.WEEKS.slice(), months: APPconstants.MONTHS.slice() };
        this.status.show = true;
        this.status.message = ""
        APPconstants.IS_UPDATE = false;
        this.is_update = false;
        this.closeModal.emit(event);
    }
    createOrUpdateJob() {
        if (!APPconstants.IS_UPDATE)
            this.createNewJob();
        else
            this.updateJob();
    }

    private createNewJob() {
        this.createData();
        this.jobService.createNewJob(this.job).subscribe((response) => {
            let json = response.json();
            if (json.status === "success") {
                this.status.show = false;
                this.status.message = "successfully created new job : " + this.job.jobName;
            }
            else {
                this.status.show = false;
                this.status.message = json.msg;
            }
        });
    }

    private updateJob() {
        this.createData();
        this.jobService.updateJob(this.job).subscribe((response) => {
            let json = response.json();
            if (json.status === "success") {
                this.status.show = false;
                this.status.message = "successfully updated the job : " + this.job.jobName;
            }
            else {
                this.status.show = false;
                this.status.message = json.msg;
            }
        });
    }

    private createData() {
        this.job.jobExeDays = this.getSelectedDays();
        this.job.jobExeMonths = this.getSelectedMonths();
        this.job.jobDateTime = this.trimDate(this.job.jobDateTime ? new Date(this.job.jobDateTime) : "");
        this.job.jobEndtime = this.trimDate(this.job.jobEndtime ? new Date(this.job.jobEndtime) : "");
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
    private trimDate(obj: any) {
        return obj ? obj.toString().substring(0, obj.toString().lastIndexOf(':') + 3) : '';
    }

    ngOnChanges() {
        if (this.create === "slide-modal") {
            if (APPconstants.IS_UPDATE) {
                this.is_update = true;
                this.job = Object.assign({}, APPconstants.UPDATE_JOB_DATA);
                this.job.weeks = this.setWeeks(this.job.jobExeDays);
                this.job.months = this.setMonths(this.job.jobExeMonths);
                this.job.jobDateTime = this.job.jobDateTime ? new Date(this.job.jobDateTime.substring(0, this.job.jobDateTime.length - 2)) : "";
                this.job.jobEndtime = this.job.jobEndtime ? new Date(this.job.jobEndtime.substring(0, this.job.jobEndtime.length - 2)) : "";
            }
        }
    }

    private setWeeks(days) {
        let weeks = APPconstants.WEEKS.slice();
        if (days) {
            if ((days[0] === '*'))
                return weeks;
            else
                weeks.map(function (obj, idx) {
                    let index = days.findIndex(function (val) {
                        return parseInt(val) === (idx + 1);
                    });
                    if (index == -1)
                        obj[Object.keys(obj)[0]] = false;
                });
        }
        return weeks;
    }
    private setMonths(months) {
        let tempMonths = APPconstants.MONTHS.slice();
        if (months)
            if ((months[0] === '*'))
                return tempMonths;
            else
                tempMonths.map(function (obj, idx) {
                    let index = months.findIndex(function (val) {
                        return parseInt(val) === idx;
                    });
                    if (index == -1)
                        obj[Object.keys(obj)[0]] = false;
                });
        return tempMonths;
    }
}