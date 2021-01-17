import { Injectable } from "@angular/core";

@Injectable()
export class InformationService {
  // baseURL = "http://localhost:8000";

  phoneNo: number;

  customerBaseUrl = "http://localhost:9200";
  loginUrl = "http://localhost:9200/login";
  registerUrl = "http://localhost:9200/customers/";
  profileUrl = "http://localhost:9200/customers/";
  viewPlanUrl = "http://localhost:9400/plans/";
  callDetailUrl = `http://localhost:9100/customers/`;
  addFriendUrl = `http://localhost:9300/customers/`;

}
