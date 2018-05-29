import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort } from '@angular/material';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})

export class MembersComponent implements OnInit {

  displayedColumns = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource(members);

  @ViewChild(MatSort) sort: MatSort;

  ngOnInit() {
    this.dataSource.sort = this.sort;
  }
}

export interface PeriodicElement {
  nr: number;
  name: string;
  status: string;
  block: number;
}

const members: PeriodicElement[] = [
  { nr: 1, name: 'Donald', status: 'Member', block: 0 },
  { nr: 2, name: 'Micky', status: 'Member', block: 0 },
  { nr: 3, name: 'Goofy', status: 'Board', block: 0 },
  { nr: 4, name: 'Daisy', status: 'Member', block: 0 },
  { nr: 5, name: 'Minnie', status: 'Board', block: 0 },
  { nr: 6, name: 'Dagobert', status: 'Board', block: 0 },
  { nr: 7, name: 'Tick', status: 'Pending', block: 0 },
  { nr: 8, name: 'Trick', status: 'Pending', block: 0 },
  { nr: 9, name: 'Truck', status: 'Pending', block: 0 },
];

function compare(a, b, isAsc) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
