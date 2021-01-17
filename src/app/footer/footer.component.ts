import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-footer",
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.css"],
})
export class FooterComponent implements OnInit {
  contact1 = "./../../assets/images/contact/fb.png";
  contact2 = "./../../assets/images/contact/gp.png";
  contact3 = "./../../assets/images/contact/t.png";
  contact4 = "./../../assets/images/contact/yt.png";
  constructor() {}

  ngOnInit(): void {}
}
