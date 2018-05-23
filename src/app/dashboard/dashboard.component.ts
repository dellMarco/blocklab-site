import { Web3Service } from './../web3.service';
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
  address;
  
  constructor(private _web3Service: Web3Service) { }


  ngOnInit() {
    this._web3Service.getAccount().then(address => this.address = address);
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

