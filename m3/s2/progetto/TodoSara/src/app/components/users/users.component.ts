import { Component } from '@angular/core';
import { iUser } from '../../models/user';
import { iTodo } from '../../models/todo';
import { TodoService } from '../../services/todo.service';
import { UserService } from '../../services/user.service';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent {
  allUser!: iUser[]

  allTodo!: iTodo[]

  constructor(private userSvc:UserService, private todoSvc:TodoService){}


}
