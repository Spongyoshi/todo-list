import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AppComponent } from './app.component';
import { TodosModule } from './todos/todos.module';
import { MeteoModule } from './meteo/meteo.module';
import { MeteoComponent } from './meteo/meteo.component';
import { AppRoutingModule } from './app-routing.module';
import { TasksComponent } from './tasks/tasks.component';
import { TasksModule } from './tasks/tasks.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WeatherModule } from './weather/weather.module';
import { WeatherComponent } from './weather/weather.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,MeteoComponent,TasksComponent,WeatherComponent],
  entryComponents: [],
  imports: [BrowserModule, 
    IonicModule.forRoot({}),
    TodosModule,
    MeteoModule,
    TasksModule,
    WeatherModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
