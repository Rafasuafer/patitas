import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-auth-nav',
  templateUrl: './auth-nav.component.html',
  styleUrls: ['./auth-nav.component.scss'],
})
export class AuthNavComponent implements OnInit {
  constructor(private _authServvice: AuthService) {}

  ngOnInit(): void {}

  get loggedIn(): boolean {
    return this._authServvice.currentUser !== undefined;
  }
  logout() {
    this._authServvice.logout();
  }
}
