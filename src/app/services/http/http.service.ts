import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttphelperService } from './http-helper.service';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private _http: HttpClient,
    private _httpHelper: HttphelperService) { }

  executeRequest(endPoint: any): Observable<any> {
    const intitialHeader: HttpHeaders = this._httpHelper.headerWithToken();
    const options = {
      method: endPoint.method,
      url: endPoint.url,
      responseType: this.isNullOrUndefined(endPoint.responseType) ? 'json' : endPoint.responseType,
      body: this.isNullOrUndefined(endPoint.body) ? null : endPoint.body,
      headers: intitialHeader
    };
    return this.request(options);
  }

  getToken(endPoint: any): Observable<any> {
    const initialHeader: HttpHeaders = this._httpHelper.headerWithoutToken();
    const options = {
      method: endPoint.method,
      url: endPoint.url,
      responseType: this.isNullOrUndefined(endPoint.responseType) ? 'json' : endPoint.responseType,
      body: this.isNullOrUndefined(endPoint.body) ? null : endPoint.body,
      headers: initialHeader
    };
    return this.request(options);

  }

  private isNullOrUndefined(property: any): boolean {
    let isNullOrUndefined = false;
    if (property === null || property === undefined) {
      isNullOrUndefined = true;
    }
    return isNullOrUndefined;
  }

  private request(args: any): Observable<any> {
    switch (args.method.toUpperCase()) {
      case 'POST':
        return this._http.post(args.url, args.body, {
          headers: args.headers,
          responseType: args.responseType,
          observe: 'body'
        }).pipe(
          catchError(this.handleError)
        );

      case 'GET':
        return this._http.get(args.url, {
          headers: args.headers,
          responseType: args.responseType,
          observe: 'body',
          params: args.body
        }).pipe(
          catchError(this.handleError)
        );

      case 'POSTWITHPARAMS':
        return this._http.post(args.url, args.body.data, {
          headers: args.headers,
          responseType: args.responseType,
          observe: 'body',
          params: args.body.params
        }).pipe(
          catchError(this.handleError)
        );

      case 'PUT':
        return this._http.put(args.url, args.body, {
          headers: args.headers,
          responseType: args.responseType,
          observe: 'body'
        }).pipe(
          catchError(this.handleError)
        );

      case 'DELETE':
        return this._http.delete(args.url, {
          headers: args.headers,
          responseType: args.responseType,
          observe: 'body',
        }).pipe(
          catchError(this.handleError)
        );
    }
  }




  private handleError(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      errorMessage = `Message: ${error.error.message}`;
    } else {
      // server-side error
      errorMessage = `Error Code: ${error.status} \n Message: ${error.message}`;
    }
    return throwError(errorMessage || 'Internal Server Error');
  }

}
