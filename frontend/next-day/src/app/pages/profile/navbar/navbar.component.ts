import { Component, Input, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "../../../services/auth.service";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"],
})
export class NavbarComponent implements OnInit {
  @Input() isTeacher: boolean;

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit() {}

  post() {
    this.router.navigate(["profile"]);
  }
  game() {
    this.router.navigate(["game"]);
  }

  logOut() {
    this.authService.logout();
    this.router.navigate(["login"]);
  }
}
