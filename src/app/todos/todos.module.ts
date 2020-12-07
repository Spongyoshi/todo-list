import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { HttpClientModule } from '@angular/common/http';
import { TodoComponent } from './todo/todo.component';
import { TodolistComponent } from './todolist/todolist.component';
import { TodosComponent } from './todos.component';

@NgModule({
    declarations: [
        TodosComponent,
        TodoComponent,
        TodolistComponent
    ],
    imports: [
        CommonModule,
        HttpClientModule
    ],
    exports: [
        TodosComponent
    ]
})
export class TodosModule {}