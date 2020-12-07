import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TasksRoutingModule } from './tasks-routing.module';
import { TaskcreateComponent } from './taskcreate/taskcreate.component';
import { TaskerrorComponent } from './taskerror/taskerror.component';
import { TasklistComponent } from './tasklist/tasklist.component';
import { TaskloadComponent } from './taskload/taskload.component';
import { TaskviewComponent } from './taskview/taskview.component';


@NgModule({
  declarations: [
    TaskcreateComponent,
    TaskerrorComponent,
    TasklistComponent,
    TaskloadComponent,
    TaskviewComponent,
  ],
  imports: [
    CommonModule,
    TasksRoutingModule
  ]
})
export class TasksModule { }
