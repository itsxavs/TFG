import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { NoticeComponent } from "./pages/profile/notice/notice.component";
import { ContainerNoticeComponent } from "./pages/profile/container-notice/container-notice.component";
import { LoginModule } from "./pages/login/login.module";
import { RouterModule } from "@angular/router";
import { LoginComponent } from "./pages/login/login.component";
import { ProfileModule } from "./pages/profile/profile.module";
import { ProfileComponent } from "./pages/profile/profile.component";
import { NavbarComponent } from "./pages/profile/navbar/navbar.component";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    LoginModule,
    ProfileModule,
    RouterModule.forRoot([
    { path: "", redirectTo: "login", pathMatch: "full" },
    { path: "login", component: LoginComponent },
    { path: "profile", component: ProfileComponent },
], { relativeLinkResolution: 'legacy' }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
