import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WeathersearchComponent } from './weathersearch.component';

describe('WeathersearchComponent', () => {
  let component: WeathersearchComponent;
  let fixture: ComponentFixture<WeathersearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeathersearchComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WeathersearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
