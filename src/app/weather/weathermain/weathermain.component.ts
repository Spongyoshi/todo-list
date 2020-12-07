import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../shared/weather.service';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { WeatherComponent } from '../weather.component';

@Component({
  selector: 'app-weathermain',
  templateUrl: './weathermain.component.html',
  styleUrls: ['./weathermain.component.scss'],
})
export class WeathermainComponent implements OnInit {
  public tab:any = null;
  public loading:boolean = true;
  public error:boolean = false;
  constructor(private geolocation: Geolocation,private service: WeatherService) { }

  ngOnInit() {
    this.geolocation.getCurrentPosition().then((resp) => {
      this.service.getWeatherbycoords(resp.coords.latitude,resp.coords.longitude).subscribe(
        (test:any) => {
          this.tab = test;
          this.loading = false;
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

  search()
  {

  }

}
