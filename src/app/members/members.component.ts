import { Component } from '@angular/core';
import { Sort } from '@angular/material';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent {
  members = [
    { nr: '1', name: 'Donald', status: 'Member', date: '01.02.2012' },
    { nr: '2', name: 'Micky', status: 'Member', date: '01.02.2012' },
    { nr: '3', name: 'Goofy', status: 'Board', date: '01.02.2010' },
    { nr: '4', name: 'Daisy', status: 'Member', date: '01.02.2012' },
    { nr: '5', name: 'Minnie', status: 'Board', date: '01.03.2011' },
    { nr: '6', name: 'Dagobert', status: 'Board', date: '01.02.2011' },
    { nr: '7', name: 'Tick', status: 'Pending', date: '01.02.2012'},
    { nr: '8', name: 'Trick', status: 'Pending', date: '01.02.2012'},
    { nr: '9', name: 'Truck', status: 'Pending', date: '02.02.2012'},
  ];

  sortedData;

  constructor() {
    this.sortedData = this.members.slice();
  }

  sortData(sort: Sort) {
    const data = this.members.slice();
    if (!sort.active || sort.direction === '') {
      this.sortedData = data;
      return;
    }

    this.sortedData = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'nr': return compare(+a.nr, +b.nr, isAsc);
        case 'name': return compare(a.name, b.name, isAsc);
        case 'status': return compare(a.status, b.status, isAsc);
        case 'date': return compare(+a.date, +b.date, isAsc);
        default: return 0;
      }
    });
  }
}

function compare(a, b, isAsc) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
