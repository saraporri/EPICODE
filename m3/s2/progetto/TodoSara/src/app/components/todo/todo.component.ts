import { Component,Input,OnInit } from '@angular/core';
import { iTodo } from '../../models/todo';
import { iUser } from '../../models/user';
import { TodoService } from '../../services/todo.service';
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss'
})
export class TodoComponent implements OnInit {

@Input() todo!:iTodo
user?:iUser
constructor (private todoSvc:TodoService){}
ngOnInit(): void {if(this.todo){
  this.user = this.todoSvc.getUserByTodoId(this.todo.id);
}
}
toggle(id:number){this.todoSvc.toggleTodo(id)}

}
