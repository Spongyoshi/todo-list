import { Component, OnInit } from '@angular/core';
import { Todo } from '../shared/todo.model';
import { TodoService } from '../shared/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent implements OnInit {

  constructor(private todoService: TodoService) { }

  onSave(name: string, description: string) {
    let todo = new Todo();
    todo.name = name;
    todo.description = description;
    this.todoService.post(todo);
  }

  ngOnInit() {}

}
