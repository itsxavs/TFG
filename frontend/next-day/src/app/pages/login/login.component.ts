import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { AuthService } from "../../services/auth.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  isLogin = true;
  header = "LOGIN";

  form = new FormGroup({
    email: new FormControl(),
    password: new FormControl(),
    firstName: new FormControl(),
    lastName: new FormControl(),
    teacher: new FormControl(),
  });

  constructor(private authService: AuthService) {}

  ngOnInit() {}
  register() {
    if (!this.isLogin) {
      this.authService.register(
        this.form.get("email").value,
        this.form.get("password").value,
        this.form.get("firstName").value,
        this.form.get("lastName").value,
        this.form.get("teacher").value
      );
      this.form.reset();
    } else {
      this.header = "REGISTER";
      this.isLogin = false;
    }
  }
  login() {
    if (this.isLogin) {
      this.authService.login(
        this.form.get("email").value,
        this.form.get("password").value
      );
    } else {
      this.header = "LOGIN";
      this.isLogin = true;
    }
  }
}
