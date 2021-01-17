import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";

import { RestService } from "./../rest.service";
import { InformationService } from "./../information.service";
import { Profile } from "./profile";

@Injectable()
export class ProfileService {
  constructor(
    private informationService: InformationService,
    private restService: RestService
  ) {}

  getProfile(): Observable<any> {
    return this.restService.get(
      this.informationService.profileUrl + this.informationService.phoneNo
    );
  }
}
