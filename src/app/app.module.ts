import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from './store/store.module';
import { AuthService } from './services/auth.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ApiHostInterceptorService } from './interceptors/api-host-interceptor.service';
import { CookieService } from 'ngx-cookie-service';
import { AuthInterceptorService } from './interceptors/auth-interceptor.service';
import { HeaderModule } from './header/header.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    StoreModule,
    HeaderModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ApiHostInterceptorService, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true },
    AuthService,
    CookieService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
