import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";

import { InformationService } from "./information.service";

@Injectable()
export class AuthGuardService implements CanActivate {
  constructor(
    public informationService: InformationService,
    public router: Router
  ) {}

  canActivate(): boolean {
    if (this.informationService.phoneNo) {
      return true;
    } else {
      this.router.navigate(["/login"]);
      return false;
    }
  }
}
