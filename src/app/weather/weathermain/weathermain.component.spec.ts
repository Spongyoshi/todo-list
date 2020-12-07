import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WeathermainComponent } from './weathermain.component';

describe('WeathermainComponent', () => {
  let component: WeathermainComponent;
  let fixture: ComponentFixture<WeathermainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeathermainComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WeathermainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
