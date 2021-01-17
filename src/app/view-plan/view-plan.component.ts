import { Component, OnInit } from "@angular/core";

import { ViewPlanService } from "./view-plan.service";
import { PlanDetail } from "./plan";

@Component({
  selector: "app-view-plan",
  templateUrl: "./view-plan.component.html",
  styleUrls: ["./view-plan.component.css"],
})
export class ViewPlanComponent implements OnInit {
  planDetails: PlanDetail[];
  errorMsg: string;
  first = 0;
  rows = 20;
  cols: any[];
  constructor(private viewPlanService: ViewPlanService) {}

  getPlanDetails() {
    this.viewPlanService.viewPlan().subscribe(
      (data) => {
        this.planDetails = data;
        console.log(this.planDetails);
      },
      (error) => (this.errorMsg = error)
    );
  }

  ngOnInit() {
    this.getPlanDetails();
    // this.cols = [
    //   { field: "planId", header: "Plan Id" },
    //   { field: "planName", header: "Plan Name" },
    //   { field: "nationalRate", header: "National Rate" },
    //   { field: "localRate", header: "Local Rate" },
    // ];
  }
}
