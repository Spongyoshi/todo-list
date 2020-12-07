import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TaskerrorComponent } from './taskerror.component';

describe('TaskerrorComponent', () => {
  let component: TaskerrorComponent;
  let fixture: ComponentFixture<TaskerrorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskerrorComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TaskerrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
