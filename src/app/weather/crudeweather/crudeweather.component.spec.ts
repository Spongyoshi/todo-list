import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CrudeweatherComponent } from './crudeweather.component';

describe('CrudeweatherComponent', () => {
  let component: CrudeweatherComponent;
  let fixture: ComponentFixture<CrudeweatherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrudeweatherComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CrudeweatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
