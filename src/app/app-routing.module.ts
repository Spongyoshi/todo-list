import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: "tasks",
    loadChildren:() => import('./tasks/tasks.module').then(m => m.TasksModule),
  },
  {
    path: "weather",
    loadChildren:() => import('./weather/weather.module').then(m => m.WeatherModule),
  },
  {
    path: "**",
    redirectTo: "weather"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
