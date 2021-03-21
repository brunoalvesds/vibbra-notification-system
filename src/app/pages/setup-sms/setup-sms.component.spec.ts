import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetupSmsComponent } from './setup-sms.component';

describe('SetupSmsComponent', () => {
  let component: SetupSmsComponent;
  let fixture: ComponentFixture<SetupSmsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetupSmsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetupSmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
