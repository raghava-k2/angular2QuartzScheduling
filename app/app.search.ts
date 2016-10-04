///<reference path="../node_modules/rxjs/Observable.d.ts"/>
/**
 * Created by kukapalv on 9/12/2016.
 */
import {Component, Inject, Input} from '@angular/core';
import {RestServices} from "./app.restServices";
import {Ng2Grid} from "./app.grid.component";
@Component({
    selector: 'client-search',
    templateUrl: './app/view/search.html',
    providers: [RestServices, Ng2Grid],
    styles: [`main {
	border-width: 10px;
	border-color: darkkhaki;
	border-style: solid;
	border-radius: 7px;
	margin: 10px;
	padding: 20px;
}`]
})
export class AppSearch {
    private searchJobNames: string;
    private gridData: Array<Object>;
    private openCreateModal: string;
    private status: any;
    constructor(private jobService: RestServices, private ng2grid: Ng2Grid) {
        this.gridData = [];
        this.openCreateModal = "hide";
        this.status = {};
        this.status.show = true;
        this.status.message = "";
    }
    createJob() {
        this.openCreateModal = "slide-modal";
    }

    closeJob() {
        this.openCreateModal = "hide";
    }

    isJobDeleted(event: any) {
        this.status.show = false;
        this.status.message = "successfully deleted jobs : " + event;
        setTimeout(() => {
            this.status.show = true;
            this.status.message = "";
        }, 2000)
        this.getAllJobDetails();
    }

    getAllJobDetails() {
        this.jobService.getJobDetails(this.searchJobNames).subscribe((response) => {
            this.gridData = response.json();
        });
    }
}