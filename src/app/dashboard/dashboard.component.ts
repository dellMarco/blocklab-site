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
    private _memberContractService: MemberContractService
  ) {

    _web3Service.getAccount().then(address => {
      this.address = address;
    });

    _memberContractService.getNumberOfMembers().then(nOM => {
    });

    _memberContractService.getStatus().then(stat => {
      stat ? this.status = 'member' : this.status = 'board';
      this.alias = stat;
    });

    _memberContractService.getMembers().then(al => {
      this.alias = al[0];
    });

  }

  ngOnInit() { }

  copyAddress() {
    if (this.isCopied) {
      this._snackBar.open('Address copied to Clipboard', 'Nice!', { duration: 2000 });
    }
  }

  changeAlias(_alias) {
    this._memberContractService.changeName(this.alias);
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

