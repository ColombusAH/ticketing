import { HttpClient } from '@angular/common/http';
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
    return this.httpClient.post('/api/users/auth/login', { ...creds }).pipe(
      map((user) => user as CurrentUser),
      tap((user) => {
        console.log({ u: user });
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
