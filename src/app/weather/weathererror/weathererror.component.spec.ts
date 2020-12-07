import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WeathererrorComponent } from './weathererror.component';

describe('WeathererrorComponent', () => {
  let component: WeathererrorComponent;
  let fixture: ComponentFixture<WeathererrorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeathererrorComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WeathererrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
