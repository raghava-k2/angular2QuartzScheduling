/**
 * Created by kukapalv on 9/12/2016.
 */
import {Injectable} from "@angular/core";
import {Http, RequestOptions, URLSearchParams} from "@angular/http";
@Injectable()
export class LoadData {
    constructor(private http: Http) {
        console.log('inside load  data methods');
    }

    getJobDetails(clientName:string) {
        let params = new URLSearchParams();
        params.set("jobName", clientName?clientName:"");
        return this.http.get('http://hyrdlt1118.es.ad.adp.com:9080/GLIquartz/do/getjobdetails', {search: params});
    }
}