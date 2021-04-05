import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserModel, UsersService } from '../users.service';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {
  public user$: Observable<UserModel> = this.route.paramMap.pipe(
    map(params => params.get('userId')),
    map(userId => this.usersService.getUser(`${userId}`))
  );
  public queryParams = this.route.queryParamMap;
  public params = this.route.paramMap;

  constructor(
    private usersService: UsersService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void { }

}
