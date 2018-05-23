import { Injectable } from '@angular/core';
declare global {
  interface Window { web3: any; }
}

window.web3 = window.web3 || {};

@Injectable({
  providedIn: 'root'
})
export class Web3Service {

  web3: any;
  accounts = this.web3.eth.accounts;

  constructor() {
    this.web3 = window.web3;
  }

  getWeb3() {
    return this.web3;
  }

  getAccount() {
    return this.accounts[0];
  }
}
