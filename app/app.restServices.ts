/**
 * Created by kukapalv on 9/12/2016.
 */
import {Injectable} from "@angular/core";
import {Http, RequestOptions, URLSearchParams, Headers} from "@angular/http";
@Injectable()
export class RestServices {
    private url: string = "http://localhost:9080/GLIquartz";
    constructor(private http: Http) {
    }

    getJobDetails(clientName: string) {
        let params = new URLSearchParams();
        params.set("jobName", clientName ? clientName : "");
        return this.http.get(this.url + "/do/getjobdetails", { search: params });
    }

    createNewJob(jobData: any) {
        let body = JSON.stringify(jobData);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.post(this.url + "/do/createjob", body);
    }

    deleteMultipleJobs(jobCodes: any) {
        let body = JSON.stringify(jobCodes);
        return this.http.post(this.url + "/do/deletejobs", body);
    }
    updateJob(jobData: any) {
        let body = JSON.stringify(jobData);
        return this.http.post(this.url + "/do/updatejob", body);
    }

}