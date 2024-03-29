import { Component } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { iTodo } from '../../models/todo';
@Component({
  selector: 'app-completed',
  templateUrl: './completed.component.html',
  styleUrl: './completed.component.scss'
})
export class CompletedComponent {
completedTodos:iTodo[]=[]
constructor(private todoSvc: TodoService) {}

ngOnInit() {
  this.completedTodos = this.todoSvc.getCompletedTodos();
}

}
