/**
 * Created by kukapalv on 9/12/2016.
 */
import {Component, Inject} from '@angular/core';
import {LoadData} from "./app.loadData";
@Component({
    selector: 'client-search',
    templateUrl: './app/view/search.html',
    providers: [LoadData],
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
    constructor(public jobService: LoadData) {
        console.log("inside search constructor");
    }

    getAllJobDetails() {
        console.log('inside search click event');
        console.log(this.jobService.getJobDetails());
    }
}