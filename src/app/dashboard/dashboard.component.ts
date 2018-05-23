import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  status;
  alias;
  applyBTNDisabled;
  changeBTNDisabled;
  resignBTNDisabled;

  constructor() { }

  ngOnInit() {
  
  }

  changeAlias(_alias) {
    this.changeBTNDisabled = true;
  }

  unlockChangeBTN() {
    this.changeBTNDisabled = false;
  }

  apply() {

  }

  resign() {

  }

}

