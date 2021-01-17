import { Observable } from "rxjs";
import { Injectable } from "@angular/core";

import { RestService } from "./../rest.service";
import { InformationService } from "./../information.service";
import { AddFriend } from "./addFriend";

@Injectable()
export class AddFriendService {
  constructor(
    public informationService: InformationService,
    public restService: RestService
  ) {}

  addFriend(data: AddFriend): Observable<any> {
    return this.restService.post(
      this.informationService.addFriendUrl +
        this.informationService.phoneNo +
        "/friends",
      data
    );
  }
}
