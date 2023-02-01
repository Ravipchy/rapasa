
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpService } from './http/http.service';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private _httpService:HttpService) { }

  userLogin(urlParam, requestData): Observable<any> {
    const endPoint = {
      method: "POST",
      url: environment.API_NODE_URL + urlParam,
      body: requestData,
    };
    return this._httpService.getToken(endPoint);
  }
}
