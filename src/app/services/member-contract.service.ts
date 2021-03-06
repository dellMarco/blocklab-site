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

  /* Contract Functions */
  /* Contract Calls */

  // get members mapping for logged in account
  async getThisMember(): Promise<string> {
    const acc = await this._web3Service.getAccount();
    return new Promise((resolve, reject) => {
      this.membersContract.members.call(acc, function (err, res) {
        if (err != null) {
          reject(err);
        }
        resolve(res);
      });
    }) as Promise<string>;
  }

  // get members mapping for spezific member
  async getMember(_account: string): Promise<string> {
    return new Promise((resolve, reject) => {
      this.membersContract.members.call(_account, function (err, res) {
        if (err != null) {
          reject(err);
        }
        resolve(res);
      });
    }) as Promise<string>;
  }

  // get all member addresses
  async getMembers(_memberNo: number): Promise<string> {
    return new Promise((resolve, reject) => {
      this.membersContract.memberAddresses.call(_memberNo, function (err, res) {
        if (err != null) {
          reject(err);
        }
        resolve(res);
      });
    }) as Promise<string>;
  }

  // get confirmations for vote
  async getConfirmations(): Promise<string> {
    const acc = await this._web3Service.getAccount();
    return new Promise((resolve, reject) => {
      this.membersContract.members.call(acc, function (err, res) {
        if (err != null) {
          reject(err);
        }
        resolve(res);
      });
    }) as Promise<string>;
  }

  // get votingContractAddress
  async getVotingContractAddress(): Promise<string> {
    const acc = await this._web3Service.getAccount();
    return new Promise((resolve, reject) => {
      this.membersContract.votingContractAddress.call(acc, function (err, res) {
        if (err != null) {
          reject(err);
        }
        resolve(res);
      });
    }) as Promise<string>;
  }

  // get Number of Members
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

  // get Number of Eligible Members
  async getNumberOfEligibleMembers(): Promise<number> {
    return new Promise((resolve, reject) => {
      this.membersContract.getNumberOfEligibleMembers.call(function (err, res) {
        if (err != null) {
          reject(err);
        }
        resolve(res);
      });
    }) as Promise<number>;
  }

  // check if address is regular or board
  async getIsRegularOrBoardMember(_memberAddress: string): Promise<string> {
    const acc = await this._web3Service.getAccount();
    return new Promise((resolve, reject) => {
      this.membersContract.isRegularOrBoardMember.call(_memberAddress, function (err, res) {
        if (err != null) {
          reject(err);
        }
        resolve(res);
      });
    }) as Promise<string>;
  }

  /* Contract Transactions */

  // apply for Membership
  async applyForMembership(_name: string) {
    this.membersContract.applyForMembership.sendTransaction(_name, function (err) {
      if (err) {
        console.log(err);
      }
    });
  }

  // change Name
  async changeName(_newName: string) {
    this.membersContract.changeName.sendTransaction(_newName, function (err) {
      if (err) {
        console.log(err);
      }
    });
  }

  // confirm Application of applicant
  async confirmApplication(_applicantAddress: string) {
    this.membersContract.confirmApplication.sendTransaction(_applicantAddress, function (err) {
      if (err) {
        console.log(err);
      }
    });
  }

  // resign membership of logged in member
  async resignOwnMembership() {
    this.membersContract.resignOwnMembership.sendTransaction(function (err) {
      if (err) {
        console.log(err);
      }
    });
  }

  // Initially set voting contract address
  async setVotingContractAddress(_votingContractAdrres: string) {
    this.membersContract.setVotingContractAddress.sendTransaction(_votingContractAdrres, function (err) {
      if (err) {
        console.log(err);
      }
    });
  }

  /* /Contract Functions */
}
