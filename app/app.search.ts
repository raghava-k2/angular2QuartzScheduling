///<reference path="../node_modules/rxjs/Observable.d.ts"/>
/**
 * Created by kukapalv on 9/12/2016.
 */
import {Component, Inject, Input} from '@angular/core';
import {LoadData} from "./app.loadData";
import {Ng2Grid} from "./app.grid.component";
@Component({
    selector: 'client-search',
    templateUrl: './app/view/search.html',
    providers: [LoadData, Ng2Grid],
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
    searchJobNames: string;

    constructor(private jobService: LoadData, private ng2grid: Ng2Grid) {
        console.log("inside search constructor");
    }

    getAllJobDetails() {
        this.jobService.getJobDetails(this.searchJobNames).subscribe((response)=> {
            console.log(response.json());
            this.ng2grid.rdata=response.json();
        });
    }
}