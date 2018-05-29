import { async } from '@angular/core/testing';
import { Observable } from 'rxjs';
import { Web3Service } from './web3.service';
import { Injectable } from '@angular/core';

declare let require: any;

const contract = require('truffle-contract');
const MembersAbi = require('../../build/contracts/Members.json');

@Injectable({
  providedIn: 'root'
})

export class MemberContractService {
  private web3: any;
  private account: any;

  private membersContract: any;
  private membersContractAdrress = '0x0689d91bbebe600a5ee8add7b34ece4ec47e83e9';
  constructor(private _web3Service: Web3Service) {
    this.web3 = this._web3Service.getWeb3();
    this.membersContract = this.web3.eth.contract(MembersAbi.abi).at(this.membersContractAdrress);
  }

  async getNumberOfMembers(): Promise<number> {
    return new Promise((resolve, reject) => {
      this.membersContract.getNumberOfMembers.call(function (err, res) {
        if (err != null) {
          reject(err);
        }
        resolve(res);
      });
    }) as Promise<number>;
  }

  async getStatus(): Promise<string> {
    const acc = await this._web3Service.getAccount();
    alert(acc);
     return acc;
  }


}
