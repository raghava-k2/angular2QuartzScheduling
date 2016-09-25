/**
 * Created by kukapalv on 9/13/2016.
 */
import {Component, Input, Output, EventEmitter} from "@angular/core";
import {default as APPconstants} from "./app.constant";
import {KeysPipe} from "./app.pipes.component";
@Component({
    selector: "create-job",
    templateUrl: "./app/view/crOrRepJob.html",
    styleUrls: ['./app/css/custom.css']
})
export class CreateOrReplaceJob {
    @Input() create: string;
    @Output() closeModal = new EventEmitter<boolean>();
    private job: Object;
    private status: Object;
    constructor() {
        this.job = { weeks: APPconstants.WEEKS.slice(), months: APPconstants.MONTHS.slice() };
        this.status = { show: true, create: true };
    }
    goBack(event: any) {
        this.closeModal.emit(event)
    }
    createNewJob() {

    }
}