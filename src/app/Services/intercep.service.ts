import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpErrorResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root',
})
export class IntercepService implements HttpInterceptor {
  constructor(private apiService: ApiService ) {}
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const token = this.apiService.getToken();
    const long = this.apiService.getlong();
    const lat = this.apiService.getlat();

    // let store=window.localStorage.getItem('storeId');

    request = request.clone({
      setHeaders: { Authorization: `Authorization ${token}`, long,lat },
    });
    return next.handle(request);
  }
}
