import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  private uri = "http://localhost:5000/";
  private _userSelection = new BehaviorSubject<any>(null);
  userSelection$ = this._userSelection.asObservable();

  constructor(private http: HttpClient, private router: Router) {}

  register(
    email: String,
    password: String,
    firstName: String,
    lastName: String,
    teacher: boolean
  ) {
    this.http
      .post(this.uri + "users/signup", {
        email: email,
        password: password,
        firstName: firstName,
        lastName: lastName,
        teacher: teacher,
      })
      .subscribe((res: any) => {
        this.router.navigate(["profile"]);
        localStorage.setItem("auth_token", res.token);
        this._userSelection.next(res.userRole);
      });
  }

  login(email: String, password: String) {
    this.http
      .post(this.uri + "users/signin", { email: email, password: password })
      .subscribe((res: any) => {
        this.router.navigate(["profile"]);
        localStorage.setItem("auth_token", res.token);
        debugger;
        this._userSelection.next(res.userRole);
      });
  }

  logout() {
    localStorage.removeItem("auth_token");
    this.router.navigate(["login"]);
  }

  logIn(): boolean {
    return localStorage.getItem("auth_token") !== null;
  }
}
