import { Component, OnInit } from "@angular/core";
import { AuthService } from "src/app/services/auth.service";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.scss"],
})
export class ProfileComponent implements OnInit {
  isTeacher: boolean;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.authService.userSelection$.subscribe((user) => {
      user.type === "Teacher"
        ? (this.isTeacher = true)
        : (this.isTeacher = false);
    });
  }
}
