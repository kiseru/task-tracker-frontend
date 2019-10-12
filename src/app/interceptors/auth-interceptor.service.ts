import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor {

  constructor(
    private authService: AuthService,
    private router: Router,
  ) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (this.authService.isAuthenticated()) {
      req = req.clone({
        headers: req.headers.set('Authorization', `Token ${this.authService.getAuthToken()}`)
      });
    }

    return next.handle(req)
      .pipe(catchError(err => {
        if (err.status === 401) {
          this.router.navigateByUrl('/auth');
        }
        throw new HttpErrorResponse(err);
      }));
  }
}
