/**
 * Created by kukapalv on 9/12/2016.
 */
import {Injectable} from "@angular/core";
import {Http, RequestOptions, URLSearchParams} from "@angular/http";
@Injectable()
export class RestServices {
    constructor(private http: Http) {
    }

    getJobDetails(clientName: string) {
        let params = new URLSearchParams();
        params.set("jobName", clientName ? clientName : "");
        return this.http.get('http://hyrdlt1118.es.ad.adp.com:9080/GLIquartz/do/getjobdetails', { search: params });
    }

    createNewJob(jobData: any) {
        return this.http.put("http://hyrdlt1118.es.ad.adp.com:9080/GLIquartz/do/createjob", jobData);
    }

    deleteMultipleJobs(jobCodes: any) {
        let params = new URLSearchParams();
        params.set("data", jobCodes);
        return this.http.delete("http://hyrdlt1118.es.ad.adp.com:9080/GLIquartz/do/deletejobs", { search: params });
    }
    updateJob(jobData: any) {
        return this.http.post("http://hyrdlt1118.es.ad.adp.com:9080/GLIquartz/do/updatejob", jobData);
    }

}