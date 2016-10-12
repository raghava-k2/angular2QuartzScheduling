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
        this.job.weeks = APPconstants.customCopy(APPconstants.WEEKS);
        this.job.months = APPconstants.customCopy(APPconstants.MONTHS);
        this.status = {};
        this.status.show = true;
        this.status.message = "";
        this.is_update = false;
    }
    goBack(event: any) {
        this.job = { glInfo: {}, weeks: APPconstants.customCopy(APPconstants.WEEKS), months: APPconstants.customCopy(APPconstants.MONTHS) };
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
        this.job.jobDateTime = this.trimDate(this.job.jobDateTimeTemp ? this.converISODate(this.job.jobDateTimeTemp) : "");
        this.job.jobEndtime = this.trimDate(this.job.jobEndTimeTemp ? this.converISODate(this.job.jobEndTimeTemp) : "");
    }

    private converISODate(obj: any) {
        let date = new Date(obj);
        date.setTime(date.getTime() - ((5 * 60 * 60 * 1000) + (1 * 30 * 60 * 1000)));
        return date;
    }

    private getSelectedDays() {
        let arr = [];
        this.job.weeks.forEach(function (obj, idx) {
            if (obj[Object.keys(obj)[0]])
                arr.push(idx + 1);
        });
        return arr;
    }
    private getSelectedMonths() {
        let arr = [];
        this.job.months.map(function (obj, idx) {
            if (obj[Object.keys(obj)[0]])
                arr.push(idx);
        });
        return arr;
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
                this.job.jobDateTimeTemp = this.job.jobDateTime ? this.convertToISODate(this.job.jobDateTime) : "";
                this.job.jobEndTimeTemp = this.job.jobEndtime ? this.convertToISODate(this.job.jobEndtime) : "";
            }
        }
    }

    private convertToISODate(obj: any) {
        let date = new Date(obj);
        date.setTime(date.getTime() + ((5 * 60 * 60 * 1000) + (1 * 30 * 60 * 1000)));
        return date.toISOString().slice(0, 16);
    }

    private setWeeks(days) {
        let weeks = APPconstants.customCopy(APPconstants.WEEKS);
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
        let tempMonths = APPconstants.customCopy(APPconstants.MONTHS);
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