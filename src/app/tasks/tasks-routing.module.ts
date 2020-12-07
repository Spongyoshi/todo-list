import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TasksComponent} from './tasks.component';
import {TaskcreateComponent} from './taskcreate/taskcreate.component';
import {TaskerrorComponent} from './taskerror/taskerror.component';
import {TasklistComponent} from './tasklist/tasklist.component';
import {TaskloadComponent} from './taskload/taskload.component';
import {TaskviewComponent} from './taskview/taskview.component';

const routes: Routes = [
  {
    path: "",
    component: TasksComponent,
    children: [
      {
        path:"create",
        component:TaskcreateComponent
      },
      {
        path:"error",
        component:TaskerrorComponent
      },
      {
        path:"list",
        component:TasklistComponent
      },
      {
        path:"load",
        component:TaskloadComponent
      },
      {
        path:"view",
        component:TaskviewComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TasksRoutingModule { }
