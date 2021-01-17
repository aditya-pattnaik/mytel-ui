import { AddFriendService } from "./add-friend.service";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-add-friend",
  templateUrl: "./add-friend.component.html",
  styleUrls: ["./add-friend.component.css"],
})
export class AddFriendComponent implements OnInit {
  submit: boolean;
  addFriendForm: FormGroup;
  errMsg: string;
  successMsg: string;
  constructor(
    private formBuilder: FormBuilder,
    private addFriendService: AddFriendService
  ) {}

  addFriend(): void {
    this.submit = true;
    this.addFriendService.addFriend(this.addFriendForm.value).subscribe(
      (data) => {
        this.successMsg = "Added Successfully";
        this.errMsg = null;
        this.addFriendForm.reset();
        setTimeout(() => this.successMsg = "", 3000)
      },
      (error) => {
        this.errMsg = error;
        this.submit = false;
        this.addFriendForm.reset();
        setTimeout(() => this.errMsg = "", 3000)
      }
    );
  }

  ngOnInit(): void {
    this.addFriendForm = this.formBuilder.group({
      friendAndFamily: [
        "",
        [Validators.required, Validators.pattern("[6-9][0-9]{9}")],
      ],
    });
  }
}
