import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

import { Register } from "./register";
import { RestService } from "./../rest.service";
import { InformationService } from "./../information.service";

@Injectable()
export class RegisterService {
  constructor(
    private informationService: InformationService,
    private restService: RestService
  ) {}

  register(data: Register): Observable<any> {
    return this.restService.post(this.informationService.registerUrl, data);
  }
}
