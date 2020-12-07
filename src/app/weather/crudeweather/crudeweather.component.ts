import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../shared/weather.service';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-crudeweather',
  templateUrl: './crudeweather.component.html',
  styleUrls: ['./crudeweather.component.scss'],
})
export class CrudeweatherComponent implements OnInit {
  public tab:any = null;
  public loading:boolean = true;
  public error:boolean = false;
  public history:any = null ;
  private formWeather : FormGroup;

  constructor(private geolocation: Geolocation, private service: WeatherService, private fb: FormBuilder) { 
    this.formWeather = this.fb.group({
      search: ['search',Validators.required]
    });
  }

  ngOnInit() {
    this.geolocation.getCurrentPosition().then((resp) => {
      this.service.getWeatherbycoords(resp.coords.latitude,resp.coords.longitude).subscribe(
        (test:any) => {
          this.tab = test;
          this.loading = false;
          this.history[0] = test;
        },
        (error) => {
          this.error = true;
          this.loading = false;
        }
      );
    }).catch((error) => {
      this.error = true;
      this.loading = false;
    });
  }

  public search(){
    this.loading = true;
    {
      if(this.formWeather.get("search").valid){
        this.service.getWeatherbyname(this.formWeather.get("search").value).subscribe(
          (test:any) => {
            this.tab = test;
            this.loading = false;
            this.history[this.history.lenght] = test;
          },
          (error) => {
            this.error = true;
            this.loading = false;
          }
        );
      }
    else{
      this.error = true;
      this.loading = false;
      }
    }
  }
}
