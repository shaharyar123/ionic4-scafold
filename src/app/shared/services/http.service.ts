// This Service is used for HTTP calls.
/***************** Import angular modules *******************/
import { Injectable } from '@angular/core';
import {
  HttpErrorResponse,
  HttpClient,
  HttpHeaders
} from '@angular/common/http';
import { environment } from 'src/environments/environment';

/*************************** End ****************************/

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(
    private http: HttpClient,
  ) { }

  // HTTP POST request without headers content-type
  async httpPostRequest(url: string, data: any): Promise<any> {
    const requestURL = `${environment.API_BASE_URL}${url}`;
    return this.http
      .post(requestURL, data, {})
      .toPromise()
      .then(res => res || [], this.responseError.bind(this));
  }

  // HTTP GET request
  async httpGetRequest(url: string, responseType: any = 'json'): Promise<any> {
    const requestURL = `${environment.API_BASE_URL}${url}`;
    return this.http
      .get(requestURL, { responseType })
      .toPromise()
      .then(res => res || [], this.responseError.bind(this));
  }

  // HTTP PATCH request
  async httpPutRequest(url: string, data: any): Promise<any> {
    const requestURL = `${environment.API_BASE_URL}${url}`;
    return this.http
      .put(requestURL, data, {})
      .toPromise()
      .then(res => res || [], this.responseError.bind(this));
  }

  // HTTP DELETE request
  async httpDeleteRequest(url: string): Promise<any> {
    const requestURL = `${environment.API_BASE_URL}${url}`;
    return this.http
      .delete(requestURL, {})
      .toPromise()
      .then(res => res || [], this.responseError.bind(this));
  }

  // error return from promise
  responseError(error: HttpErrorResponse) {
    throw error;
  }


}
