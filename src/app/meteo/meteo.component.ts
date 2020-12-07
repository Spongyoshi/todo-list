import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meteo',
  templateUrl: './meteo.component.html',
  styleUrls: ['./meteo.component.scss'],
})
export class MeteoComponent implements OnInit {
/*
  constructor(private http: HttpClient) {
    const options = {
      headers: new HttpHeaders({
        "appid": "c5c34be58018016d339da5268ac43c50"
      })
    };

    this.http.get("http://api.openweathermap.org/data/2.5/forecast?id=524901", options).subscribe(
      (data: Todo[]) => {
        data.forEach((todo) => {
          this.todoList.push(todo)
        })
      },
      () => {
        console.log("Error");
      }
    )
  }
  */

  ngOnInit() {}

}
