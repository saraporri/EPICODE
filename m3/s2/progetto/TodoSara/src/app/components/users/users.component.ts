import { Component, OnInit } from '@angular/core';
import { iUser } from '../../models/user';
import { iTodo } from '../../models/todo';
import { TodoService } from '../../services/todo.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users: { user: iUser, todos: iTodo[] }[] = [];

  constructor(private userSvc: UserService, private todoSvc: TodoService) { }

  ngOnInit() {
    const users= this.userSvc.getUsers()
      this.users = users.map(user => ({
        user: user,
        todos: this.todoSvc.getTodos().filter(todo => todo.userId === user.id)
      }));
    };
  }

