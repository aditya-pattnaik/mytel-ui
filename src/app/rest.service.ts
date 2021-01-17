import { Injectable } from "@angular/core";

import {
  HttpClient,
  HttpResponse,
  HttpErrorResponse,
} from "@angular/common/http";
import { Observable, throwError } from "rxjs";

import { map, catchError } from "rxjs/operators";

@Injectable()
export class RestService {
  constructor(private http: HttpClient) {}

  get(url: string) {
    return this.http.get(
      url
    ); /* 
      .pipe(map(this.extractData), catchError(this.handleErrorObservable)); */
  }

  post(url, data) {
    //const headers = new Headers({ "Content-Type": "application/json" });
    console.log(data)
    const options = { headers: { "Content-Type": "application/json" } };
    return this.http.post(
      url,
      data,
      options
    ); /* 
      .pipe(map(this.extractData), catchError(this.handleErrorObservable)); */
  }

 /*  extractData(res: HttpResponse<any>) {
    const resp = res;
    const st = resp.status;

    if (st + "" === "200") {
      try {
        return res.json();
      } catch (error) {
        return true;
      }
    } else if (res.status < 200 || res.status >= 300) {
      return throwError("Bad response status: " + res.status);
    } else {
      return res.json();
    }
  }

  handleErrorObservable(error: HttpErrorResponse | any) {
    let errMsg: string;
    if (error instanceof HttpResponse) {
      if (error.status === 500) {
        errMsg =
          "We experiencing some problems. Please try again after some time";
      } else {
        errMsg = "Server Error";
      }
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    return throwError(errMsg);
  } */
}
