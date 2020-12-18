import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { AuthService } from "./../_services/auth.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"],
})
export class HeaderComponent implements OnInit {
  mobileMenuOpne: boolean;
  loggedIn: boolean;
  token: SVGAnimatedString;
  headerText: string;
  constructor(
    private authService: AuthService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.mobileMenuOpne = false;
    this.token = this.authService.GetTokenFromUrl().access_token;
    if (this.token) {
      this.loggedIn = !this.loggedIn;
      localStorage.setItem("token", String(this.token));
      this.GetUserDetails();
      this.headerText = this.authService.loggedInUser.display_name;
    } else {
      this.headerText = "Log in";
    }
  }

  MobileMenuOpen(event) {
    this.mobileMenuOpne = !this.mobileMenuOpne;
  }

  GetUserDetails() {
    this.authService.GetUserDetails();
  }
}
