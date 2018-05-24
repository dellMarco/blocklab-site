import { Web3Service } from './../web3.service';
import { Component, OnInit } from '@angular/core';
import { SlicePipe } from '@angular/common';


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
  addressStart;
  addressEnd;

  constructor(private _web3Service: Web3Service, private slicePipe: SlicePipe) { }


  ngOnInit() {
    this._web3Service.getAccount().then(address => {
      this.address = address;
      this.addressStart = this.slicePipe.transform(address, 0, 6);
      this.addressEnd = this.slicePipe.transform(address, 35, 41);
    });
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

