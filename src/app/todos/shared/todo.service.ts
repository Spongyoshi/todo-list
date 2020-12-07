import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Todo } from './todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  public todolist: Todo[] = [];

  constructor( private http:HttpClient) {
    const options = {
      headers: new HttpHeaders({
        //"secret-key": environment.jsonbin.key
      })
    }
    //Inserer un loading ici qui s'efface quand on sors du constructeur
    this.http.get(environment.jsonbin.url,options).subscribe(
      (todolist:Todo[])=>{
        todolist.forEach(todo=>{
          this.todolist.push(todo)
        })
      },
      ()=>{
        console.log("error");
        //Inserer un texte d'erreur ici
      }
    );
  }

  /**
   * @param Todo
   */
  delete(todo: Todo): Todo
   { 
      const todoList = [];
      this.todolist.forEach(item => { 
        if (todo != item)
        {todoList.push(item)}
      }
      );
      this.put(todoList).subscribe(
      ()=>{
        const index = this.todolist.indexOf(todo);
        this.todolist.splice(index,1);
        //Enlever le loading
      },
      ()=>{
        //Changer le loading par un message d'erreur
      },
      );
      return todo;
    }

   post(todo:Todo): Todo{
     const todoList = [];
     this.todolist.forEach(item => todoList.push(item));
     todoList.push(todo);
     this.put(todoList).subscribe(
     () => this.todolist.push(todo),
     () => {},
     );
     return todo;
   }

   /**
    * @param todoList
    */
   put(todoList:Todo[]): Observable<Todo[]>{
    return this.http.put<Todo[]>(environment.jsonbin.url,todoList, {
      headers: new HttpHeaders({
        //"secret-key": environment.jsonbin.key,
        "versioning": "false",
        "Content-Type":"application/json"
      })
    });
  }
}
