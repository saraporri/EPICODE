import { Component } from '@angular/core';
import { iUsers } from '../../models/users';
import { UsersService } from '../../users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent {
  users: iUsers[]=[];

  constructor(private usersSvc: UsersService) { }

  ngOnInit(): void {
    this.usersSvc.$users.subscribe(users => {
      this.users = users;
    });
  }

}
