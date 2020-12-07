import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TaskcreateComponent } from './taskcreate.component';

describe('TaskcreateComponent', () => {
  let component: TaskcreateComponent;
  let fixture: ComponentFixture<TaskcreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskcreateComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TaskcreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
