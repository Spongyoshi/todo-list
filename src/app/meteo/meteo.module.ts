import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MeteoSearchComponent } from './meteo-search/meteo-search.component';
import { MeteoResultComponent } from './meteo-result/meteo-result.component';
import { MeteoListComponent } from './meteo-list/meteo-list.component';

@NgModule({
  declarations: [MeteoSearchComponent, MeteoResultComponent, MeteoListComponent],
  imports: [CommonModule, HttpClientModule],
  exports: [MeteoSearchComponent, MeteoResultComponent, MeteoListComponent]
})
export class MeteoModule { }
