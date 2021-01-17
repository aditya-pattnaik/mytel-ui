import { Component, OnInit } from "@angular/core";

import { Profile } from "./profile";
import { ProfileService } from "./profile.service";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.css"],
})
export class ProfileComponent implements OnInit {
  profileDetail: Profile;
  maleImage = 'assets/images/profile/male_profile.png';
  femaleImage = 'assets/images/profile/female_profile.png';
  errorMsg: string;
  personalInfo = true;
  friendAndFamilyErrorMsg: string;
  constructor(private profileService: ProfileService) {}

  getProfileDetails(): void {
    this.profileService.getProfile().subscribe(
      (data) => {
        this.profileDetail = data;
        if (this.profileDetail.friendAndFamily[0] === -1) {
          this.friendAndFamilyErrorMsg =
            "Could not populate Friends list. Please try again after some time";
        }
      },
      (error) => (this.errorMsg = error)
    );
  }

  ngOnInit(): void {
    this.getProfileDetails();
  }
}
