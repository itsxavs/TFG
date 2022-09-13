import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { ProfileComponent } from "./profile.component";
import { NoticeComponent } from "./notice/notice.component";
import { ContainerNoticeComponent } from "./container-notice/container-notice.component";
import { NavbarComponent } from "./navbar/navbar.component";

@NgModule({
  declarations: [
    ProfileComponent,
    NoticeComponent,
    ContainerNoticeComponent,
    NavbarComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule],
})
export class ProfileModule {}
