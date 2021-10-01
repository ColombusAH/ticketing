import { AbstractControl, FormGroup } from '@angular/forms';

export interface LoginCredentials {
  email: string;
  password: string;
  rememberMe: boolean;
}

export type LoginCredentialsControls = {
  [key in keyof LoginCredentials]: AbstractControl;
};

export type LoginCredentialsFormGroup = FormGroup & {
  value: LoginCredentials;
  controls: LoginCredentialsControls;
};
