import { Component, OnInit } from '@angular/core';
import { User } from './User';
import { Router } from "@angular/router";
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {
  user: User = new User(null, null)
  submitted: boolean

  constructor(public authService: AuthService, public router: Router) { }

  ngOnInit(): void {
    if (this.authService.isLoggedIn()) {
      this.router.navigate(["currency-exchange-rates"])
    }
  }

  onSubmit() {
    this.submitted = true
    this.authService.login(this.user)

    if (this.authService.isLoggedIn()) {
      this.router.navigate(["currency-exchange-rates"])
    }
  }

  passwordRegex(): string {
    return "((?=.*\\d)(?=.*[a-z])(?=.*[A-Z])).{3,}"
  }
} 
