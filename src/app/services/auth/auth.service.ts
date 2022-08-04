import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User, UserType } from 'src/app/models/user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  currentUser?: User;

  constructor(private router: Router) {}

  login() {
    this.currentUser = {
      id: 1,
      name: 'John Doe',
      email: 'a@a.com',
      phone: '123456789',
      type: UserType.PERSON,
    } as User;
    this.router.navigate(['/']);
  }

  logout() {
    this.currentUser = undefined;
  }
}
