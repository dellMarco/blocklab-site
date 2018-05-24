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
  account;

  constructor() {
    this.web3 = window.web3;
  }

  getWeb3() {
    return this.web3;
  }

  public checkWeb3() {
    // Checking if Web3 has been injected by the browser (Mist/MetaMask)
    if (typeof window.web3.currentProvider !== 'undefined') {
      window.web3 = new Web3(window.web3.currentProvider);
      return true;
    } else {
      return false;
    }
  }

  // get current account address from MetaMask
  public async getAccount(): Promise<string> {
    if (this.account == null) {
      this.account = await new Promise((resolve, reject) => {
        this.web3.eth.getAccounts((err, accs) => {
          if (err != null) {
            alert('There was an error fetching your accounts.');
            return;
          }

          if (accs.length === 0) {
            alert(
              'Couldn\'t get any accounts! Make sure your Ethereum client is configured correctly.'
            );
            return;
          }
          resolve(accs[0]);
        });
      }) as string;

      this.web3.eth.defaultAccount = this.account;
    }

    return Promise.resolve(this.account);
  }

}
