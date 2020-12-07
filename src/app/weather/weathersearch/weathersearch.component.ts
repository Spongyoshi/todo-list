import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-weathersearch',
  templateUrl: './weathersearch.component.html',
  styleUrls: ['./weathersearch.component.scss'],
})
export class WeathersearchComponent implements OnInit {
  private formWeather : FormGroup;

  constructor(private fb: FormBuilder) {
    this.formWeather = this.fb.group({
      search: ['search',Validators.required]
    });
   }

  ngOnInit() {}

  /*public search()
  {
    if(this.formWeather.get("search").valid){
      
    }
    else{
      bug();
    }
  }*/

}
