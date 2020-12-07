import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MeteoResultComponent } from './meteo-result.component';

describe('MeteoResultComponent', () => {
  let component: MeteoResultComponent;
  let fixture: ComponentFixture<MeteoResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeteoResultComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MeteoResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
