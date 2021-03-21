import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManualNotificationComponent } from './manual-notification.component';

describe('ManualNotificationComponent', () => {
  let component: ManualNotificationComponent;
  let fixture: ComponentFixture<ManualNotificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManualNotificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManualNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
