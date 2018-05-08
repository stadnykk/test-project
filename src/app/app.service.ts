import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AppService {
    constructor(
        private http: HttpClient
    ) { }

    getPostcodes(input: string): Observable<{}> {
        return this.http.get(`http://postcodes.io/postcodes?q=${input}`);
    }

    getOutcodes(outcode: string): Observable<{}> {
        return this.http.get(`http://postcodes.io/outcodes/${outcode}`);
    }
}