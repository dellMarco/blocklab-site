import { Component } from '@angular/core';
import {} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: []
})
export class AppComponent {
  active = false;

  get stateName() {
    return this.active ? 'active' : 'inactive';
  }

  toggle() {
    this.active = !this.active;
  }

}
