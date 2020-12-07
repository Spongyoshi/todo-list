import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrudeweatherComponent } from './crudeweather/crudeweather.component';
import { WeatherComponent } from './weather.component';
import { WeathererrorComponent } from './weathererror/weathererror.component';
import { WeatherhistoryComponent } from './weatherhistory/weatherhistory.component';
import { WeatherloadingComponent } from './weatherloading/weatherloading.component';
import { WeathermainComponent } from './weathermain/weathermain.component';
import { WeatherresultComponent } from './weatherresult/weatherresult.component';
import { WeathersearchComponent } from './weathersearch/weathersearch.component';

const routes: Routes = [
  {
    path: "",
    component: WeatherComponent,
    children: [
      {
        path:"home",
        component:CrudeweatherComponent
      },
      {
        path: "**",
        redirectTo: "home"
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WeatherRoutingModule { }
