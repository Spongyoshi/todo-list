import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TaskloadComponent } from './taskload.component';

describe('TaskloadComponent', () => {
  let component: TaskloadComponent;
  let fixture: ComponentFixture<TaskloadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskloadComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TaskloadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
