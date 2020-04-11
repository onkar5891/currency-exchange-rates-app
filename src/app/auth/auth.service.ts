import { Injectable } from '@angular/core';
import { User } from '../login/User';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loggedIn: boolean = false

  constructor(public router: Router) { }

  login(user: User) {
    this.loggedIn = true
    sessionStorage.setItem("current-user", user.username)
  }

  logout() {
    this.loggedIn = false
    sessionStorage.removeItem("current-user")
    this.router.navigate([''])
  }

  isLoggedIn() {
    if (sessionStorage.getItem("current-user") != null) {
      this.loggedIn = true
    }
    return this.loggedIn
  }
}
