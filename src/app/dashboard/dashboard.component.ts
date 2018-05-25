import { Web3Service } from './../web3.service';
import { Component, OnInit } from '@angular/core';
import { SlicePipe } from '@angular/common';
import { MatSnackBar } from '@angular/material';

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
  isCopied;

  constructor(public snackBar: MatSnackBar, private _web3Service: Web3Service, private slicePipe: SlicePipe) { }

  ngOnInit() {
    this._web3Service.getAccount().then(address => {
      this.address = address;
    });
  }

  copyAddress() {
    if (this.isCopied) {
      this.snackBar.open('Address copied to Clipboard', 'Nice!', { duration: 2000 });
    }
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

