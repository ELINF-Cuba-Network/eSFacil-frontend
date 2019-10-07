import { Component, OnInit } from "@angular/core";

@Component({
  selector: "esf-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.scss"]
})
export class SidebarComponent implements OnInit {
  linkMenu = ["In Process", "Send Document", "Denieg", "Accept"];
  constructor() {}

  ngOnInit() {}
}
