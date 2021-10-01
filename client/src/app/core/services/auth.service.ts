import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, tap } from 'rxjs';
import { CurrentUser, LoginCredentials } from 'src/app/interfaces/auth';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly currentUserSubject: BehaviorSubject<CurrentUser | null>;
  public readonly currentUser$: Observable<CurrentUser | null>;

  constructor(
    private readonly httpClient: HttpClient,
    private readonly cookieService: CookieService
  ) {
    let currentUser = localStorage.getItem('currentUser');
    currentUser = currentUser || '{}';
    this.currentUserSubject = new BehaviorSubject(JSON.parse(currentUser));

    this.currentUser$ = this.currentUserSubject.asObservable();
  }

  get currentUser() {
    return this.currentUserSubject.value;
  }

  login(creds: LoginCredentials) {
    const options = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      withCredentials: true,
    };
    return this.httpClient
      .post('/api/users/auth/login', { ...creds }, options)
      .pipe(
        map((user) => user as CurrentUser),
        tap((user) => {
          console.log({ u: user });
          console.log(this.cookieService.get('Authentication'));

          localStorage.setItem('currentUser', JSON.stringify(user));
          this.currentUserSubject.next(user);
        })
      );
  }

  logout() {
    localStorage.clear();
    this.currentUserSubject.next(null);
  }
}
