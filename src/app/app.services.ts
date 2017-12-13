import {Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Rx';
//import 'rxjs/add/operator/toPromise';


@Injectable()
export class GetHttpService{
    constructor(private _http: Http){}
    

    getService(aa : string)   {
       
        // const headers = new Headers();
        // headers.append('Access-Control-Allow-Headers', 'Content-Type');
        // headers.append('Access-Control-Allow-Methods', 'GET');
        // headers.append('Access-Control-Allow-Origin', '*');

        //https://0pedmudi80.execute-api.us-east-1.amazonaws.com/logapi/dataid/
        //https://b06h5oh5rg.execute-api.us-east-1.amazonaws.com/project/eventTime/
        
        return this._http.get('https://b06h5oh5rg.execute-api.us-east-1.amazonaws.com/project/eventTime/'+aa )
        .map((response:Response) => response.json());
                                
    }
}