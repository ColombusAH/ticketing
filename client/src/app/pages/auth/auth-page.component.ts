import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthPageService } from './auth-page.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth-page.component.html',
  styleUrls: ['./auth-page.component.scss'],
})
export class AuthComponent implements OnInit {
  form: FormGroup;

  get formControls() {
    return this.form.controls;
  }
  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly authService: AuthPageService
  ) {
    this.form = this.formBuilder.group({
      email: ['', [Validators.email, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(3)]],
      rememberMe: [false],
    });
    this.form.valueChanges.subscribe((v) => {
      console.log(this.form.controls);
    });
  }

  ngOnInit(): void {
    console.log(this.form);
  }
  login() {
    console.log(this.form.value);
  }
}
