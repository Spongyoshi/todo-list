import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { createUrlResolverWithoutPackagePrefix } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { AppModule } from 'src/app/app.module';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http:HttpClient) {
  }

  getWeatherbycoords(latitude:number,longitude:number){
    return this.http.get(environment.weather.url + "lat=" + latitude + "&lon=" + longitude + "&units=metric&appid=" + environment.weather.appid);
  }

  getWeatherbyname(location:string){
    return this.http.get(environment.weather.url + "q=" + location + "&units=metric&appid=" + environment.weather.appid);
  }

  

}