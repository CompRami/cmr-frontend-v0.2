import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { User } from '../shared/models/user.model';
import { UserService } from '../services/user.service';
import { MembriService } from '../services/membri.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  searchForm: FormGroup;
  currentUser: User;
  users: User[] = [];
  membri: any[];
  emptySearchResult = false;
  loading = false;

  constructor(private userService: UserService,
              private membriService: MembriService,
              private router: Router) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  ngOnInit() {
    this.searchForm = new FormGroup ({
      'searchMem': new FormControl(null, [Validators.required])
    });
  }

  onSearch(searchVal: string) {
    this.loading = true;
    this.emptySearchResult = false;
    // TODO: de revizuit actiune
    const actiune = 'list';
    this.membriService.getAll(actiune, searchVal).subscribe( (response) => {
      if (response.length === 0) {
        this.emptySearchResult = true;
      }
      this.loading = false;
      this.membri = response;
    });
  }

  onClickMem(id: string) {
    this.router.navigate(['/membri', id , 'datepersonale']);
  }

}