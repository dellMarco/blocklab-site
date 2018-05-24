import { Web3Service } from './web3.service';
import { Component, OnInit } from '@angular/core';
import { } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: []
})
export class AppComponent implements OnInit {
  active = false;

  constructor(private _web3Service: Web3Service) { }

  ngOnInit() {
    
    if (this._web3Service.checkWeb3()) {
      window.web3 = new Web3(window.web3.currentProvider);
    } else {
      if (location.pathname !== '/MetaMask') {
        location.assign('/MetaMask');
      }
    }
  }

  get stateName() {
    return this.active ? 'active' : 'inactive';
  }

  toggle() {
    this.active = !this.active;
  }

}
