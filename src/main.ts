import { AppRoutingModule } from './app/app-routing.module';
import { Router } from '@angular/router';
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}
window.addEventListener('load', function () {

  // Checking if Web3 has been injected by the browser (Mist/MetaMask)
  if (typeof window.web3 !== 'undefined') {

    window.web3 = new Web3(window.web3.currentProvider);
  } else {
    if (this.location.pathname !== '/MetaMask') {
      this.location.assign('/MetaMask');
    }
    window.alert('No web3 detected. Install MetaMask Plugin to proceed!');
  }

  platformBrowserDynamic().bootstrapModule(AppModule)
    .catch(err => console.log(err));
});
