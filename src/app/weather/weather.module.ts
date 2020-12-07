import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WeatherRoutingModule } from './weather-routing.module';
import { WeathererrorComponent } from './weathererror/weathererror.component';
import { WeatherhistoryComponent } from './weatherhistory/weatherhistory.component';
import { WeatherloadingComponent } from './weatherloading/weatherloading.component';
import { WeatherresultComponent } from './weatherresult/weatherresult.component';
import { WeathersearchComponent } from './weathersearch/weathersearch.component';
import { HttpClientModule } from '@angular/common/http';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { WeathermainComponent } from './weathermain/weathermain.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CrudeweatherComponent } from './crudeweather/crudeweather.component';


@NgModule({
  declarations: [
    WeathererrorComponent,
    WeatherhistoryComponent,
    WeatherloadingComponent,
    WeatherresultComponent,
    WeathersearchComponent,
    WeathermainComponent,
    CrudeweatherComponent
  ],
  imports: [
    CommonModule,
    WeatherRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    Geolocation
  ],
  exports: []
})
export class WeatherModule { }
