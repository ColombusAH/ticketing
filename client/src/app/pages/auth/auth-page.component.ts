import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { catchError, of } from 'rxjs';
import {
  LoginCredentials,
  LoginCredentialsControls,
  LoginCredentialsFormGroup,
} from 'src/app/interfaces/auth';
import { AuthPageService } from './auth-page.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth-page.component.html',
  styleUrls: ['./auth-page.component.scss'],
})
export class AuthComponent implements OnInit {
  form: LoginCredentialsFormGroup;

  get formControls() {
    return this.form.controls;
  }
  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly authService: AuthPageService,
    private readonly router: Router
  ) {
    this.form = this.formBuilder.group({
      email: ['', [Validators.email, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(3)]],
      rememberMe: [false],
    } as unknown as LoginCredentialsControls) as LoginCredentialsFormGroup;
  }

  ngOnInit(): void {}
  login(creds: LoginCredentials) {
    this.authService
      .login(this.form.value)
      .pipe(
        catchError((error) => {
          console.log('error!');
          console.log(error);
          return of(null);
        })
      )
      .subscribe((user) => {
        if (user) {
          this.router.navigate(['/home']);
        } else {
          console.log('make info for the user');
        }
      });
  }
}
