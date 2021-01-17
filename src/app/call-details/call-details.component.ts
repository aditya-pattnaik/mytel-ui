import { Component, OnInit } from "@angular/core";

import { CallDetailsService } from "./call-details.service";
import { CallDetail } from "./callDetail";

@Component({
  selector: "app-call-details",
  templateUrl: "./call-details.component.html",
  styleUrls: ["./call-details.component.css"],
})
export class CallDetailsComponent implements OnInit {
  callDetails: Array<CallDetail>;
  errorMsg: string;
  filterParam: any;
  cols: any[];
  first = 0;
  rows = 20;
  constructor(private callDetailService: CallDetailsService) {}

  getCallDetails(): void {
    this.callDetailService.getCallDetails().subscribe(
      (data) => {
        this.callDetails = data;
      },
      (error) => (this.errorMsg = error)
    );
  }

  ngOnInit(): void {
    this.getCallDetails();
    this.cols = [
      { field: "calledBy", header: "Call By" },
      { field: "calledTo", header: "Called to" },
      { field: "calledOn", header: "Called On" },
      { field: "duration", header: "Duration(mins)" },
    ];
  }
}
