import { MemberContractService } from './../services/member-contract.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort } from '@angular/material';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})

export class MembersComponent implements OnInit {
  nOM;

  constructor(private _memberContractService: MemberContractService) { }

  displayedColumns = ['nr', 'name', 'status', 'block'];
  dataSource = new MatTableDataSource(membersList);


  @ViewChild(MatSort) sort: MatSort;

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;

  }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this._memberContractService.getNumberOfMembers().then(nOM => {
      this.nOM = nOM;

      for (let i = 0; i < nOM; i++) {

        this._memberContractService.getMembers(i).then(memberAddress => {
          this._memberContractService.getMember(memberAddress).then(member => {

            let _status;
            switch (parseInt(member[1], 0)) {
              case 1: _status = 'pending'; break;
              case 2: _status = 'regular'; break;
              case 3: _status = 'board'; break;
              default: _status = 'none'; break;
            }

            let _entry;
            _entry = parseInt(member[2], 0);

            membersList[i] = ({ nr: i + 1, name: member[0], status: _status, block: _entry});
            this.dataSource.sort = this.sort;
          });
        });
      }
    });
  }
}

export interface PeriodicElement {
  nr: number;
  name: string;
  status: string;
  block: number;
}

const membersList: PeriodicElement[] = [];

function compare(a, b, isAsc) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}


