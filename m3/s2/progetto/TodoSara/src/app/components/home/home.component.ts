import { Component } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { iTodo } from '../../models/todo';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {todoArr: iTodo[] = []

  constructor(private todoSvc:TodoService){
  this.todoArr = this.todoSvc.getTodos()
  }

}
