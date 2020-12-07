import { Component, OnInit } from '@angular/core';
import { Todo } from '../shared/todo.model';
import { TodoService } from '../shared/todo.service'

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss'],
})
export class TodolistComponent implements OnInit {
  public todolist: Todo[] = [];

  /**
   * @param todoService
   */

  constructor(private todoService: TodoService) {
      this.todolist = this.todoService.todolist;
   }

   /**
   * @param todo
   */

   delete(todo: Todo) 
   { 
      this.todoService.delete(todo);
   }

   retry()
   {
     
   }

  ngOnInit() {}

}
