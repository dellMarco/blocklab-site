import { MemberContractService } from '../services/member-contract.service';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { Web3Service } from '../services/web3.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {
  status;
  address;
  alias;
  applyBTNDisabled;
  changeBTNDisabled;
  resignBTNDisabled;
  isCopied;

  constructor(
    public _snackBar: MatSnackBar,
    private _web3Service: Web3Service,
    private _meverContractService: MemberContractService
  ) {

    _web3Service.getAccount().then(address => {
      this.address = address;
    });

    _meverContractService.getNumberOfMembers().then(nOM => {
    });

    _meverContractService.getStatus().then(stat => {
      this.status = stat;
    });
  }

  ngOnInit() { }

  copyAddress() {
    if (this.isCopied) {
      this._snackBar.open('Address copied to Clipboard', 'Nice!', { duration: 2000 });
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

