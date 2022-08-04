import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import CustomValidators from 'src/app/helpers';
import { User, UserType } from 'src/app/models/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;
  user = new User();
  userType = UserType;
  enumValues = Object.values(UserType)
    .filter((v) => typeof v === 'number')
    .map((v) => Number(v));
  enumKeys = Object.values(UserType).filter((v) => typeof v === 'string');

  constructor() {
    this.addValidators();
  }

  ngOnInit(): void {}

  register() {
    console.log(this.registerForm?.value);
  }

  addValidators() {
    this.registerForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
      confirmPassword: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
      name: new FormControl('', [Validators.required]),
      phone: new FormControl('', [Validators.required]),
      type: new FormControl('', [Validators.required]),
    });

    this.registerForm
      .get('confirmPassword')
      ?.addValidators(
        CustomValidators.matchControls(
          this.registerForm.get('password'),
          this.registerForm.get('confirmPassword')
        )
      );
  }

  changeType(e: Event) {}
}
