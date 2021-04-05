import { Component, OnInit } from '@angular/core';
import { UserModel, UsersService } from '../users.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {
  public users: Array<UserModel> = [];

  constructor(
    private usersService: UsersService,
  ) { }

  ngOnInit(): void {
    this.users = this.usersService.getUsers();
  }

}
