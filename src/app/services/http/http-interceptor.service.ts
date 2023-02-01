import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { LoadingController } from '@ionic/angular';
// import { TranslateService } from '@ngx-translate/core';
// import { UtilityService } from '../utility-service/utility.service';
// import { LoginService } from 'src/app/pages/login/login.service';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService implements HttpInterceptor {
  loaderToShow: any;
  constructor(
    public loadingController: LoadingController,
    // public translate: TranslateService,
    // private _utilityService: UtilityService,
    // private _loginService: LoginService,
    private _route: Router) { }
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    this.showLoader();
    return next.handle(request).pipe(
      map((event: HttpEvent<any>) => {
        // this.hideLoader();
        return event;
      }),
      catchError((error: HttpErrorResponse) => {
        // this.hideLoader();
        return this.handleError(error);
      })
    );
  }
  showLoader() {
    console.log('loader in start')
    this.loaderToShow = this.loadingController.create({
      message: 'Please wait...',
      duration: 1000
    }).then((res) => {
      res.present();
    });
  }
   hideLoader() {
    console.log('loader in end.')
  this.loaderToShow.dismiss();
    // this.loadingController.dismiss(null, undefined);
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
    console.log(errorMessage);
    switch (error.status) {
      // case 0:
      // this._utilityService.showToastLogin(this.translate.instant('message.error.0'));
      // break;
      // case 503:
      // this._utilityService.showToastLogin(this.translate.instant('message.error.503'));
      // break;
      // case 401:
      //     this._route.navigate(['/login']);
      //     localStorage.clear();
      //     this._utilityService.showToastLogin(this.translate.instant('message.error.401'));
      // break;
      default:
      return throwError(errorMessage || 'Internal Server error');
    }
  }
}