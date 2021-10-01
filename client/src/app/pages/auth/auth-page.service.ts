import { Injectable } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';
import { LoginCredentials } from 'src/app/interfaces/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthPageService {
  constructor(private readonly authService: AuthService) {}
  login(creds: LoginCredentials) {
    return this.authService.login(creds);
  }
}
