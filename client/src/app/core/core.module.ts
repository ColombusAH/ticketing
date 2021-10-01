import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { cookieInterceptorProvider } from './interceptors';
import { CookieService } from 'ngx-cookie-service';
@NgModule({
  declarations: [],
  imports: [CommonModule, HttpClientModule],
  providers: [CookieService, cookieInterceptorProvider],
})
export class CoreModule {}
