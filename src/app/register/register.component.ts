import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";

import { RegisterService } from "./register.service";
import { InformationService } from "./../information.service";
import { SelectItem } from "primeng/api";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"],
})
export class RegisterComponent implements OnInit {
  submit: boolean = false;
  successMsg: string;
  errorMsg: string;
  registerForm: FormGroup;
  plans: SelectItem[];
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private registerService: RegisterService,
    private informationService: InformationService
  ) {}

  register() {
    this.submit = true;
    this.registerService.register(this.registerForm.value).subscribe(
      (data) => (this.successMsg = "Registered Successfully"),
      (error) => {
        console.log(error);
        this.errorMsg = error;
        this.submit = false;
      }
    );
  }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      phoneNo: ["", [Validators.required, Validators.pattern("[7-9][0-9]{9}")]],
      name: ["", [Validators.required]],
      age: ["", [Validators.required]],
      gender: ["", [Validators.required]],
      password: ["", [Validators.required]],
      address: ["", [Validators.required]],
      currentPlan: this.formBuilder.group({
        planId: ["", [Validators.required]],
      }),
    });
    this.plans = [
      { label: "INFY_60", value: "1" },
      { label: "INFY_10", value: "2" },
      { label: "INFY_30", value: "3" },
    ];
  }
}
