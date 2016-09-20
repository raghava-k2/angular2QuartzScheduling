/**
 * Created by kukapalv on 9/13/2016.
 */
import {Component,Input} from "@angular/core";
import {default as APPconstants} from "./app.constant";
import {KeysPipe} from "./app.pipes.component";
@Component({
    selector: "create-job",
    templateUrl: "./app/view/crOrRepJob.html",
    styleUrls: ['./app/css/custom.css']
})
export class CreateOrReplaceJob {
    @Input() create: Boolean;
    private job: Object;
    private status: Object;
    constructor() {
        this.job = { weeks: APPconstants.WEEKS, months: APPconstants.MONTHS };
        this.status = { show: true, create: true };
    }
    goBack() {

    }
    createNewJob() {

    }
}