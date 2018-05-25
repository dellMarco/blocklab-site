import { Web3Service } from './web3.service';
import { Members } from './../contracts/Members';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ContractService {
  constructor(private _web3Service: Web3Service) { }
  address = this._web3Service.getAccount;

  async getMember() {
    const membersContract = await Members.createAndValidate(this._web3Service.getWeb3(), '0xb2db1f808351220ac76096cd91300e9879c3f531');

    return await membersContract.memberAddresses(0);
  }

}
