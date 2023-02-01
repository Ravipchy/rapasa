import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OndemandBookingHistoryComponent } from './ondemand-booking-history.component';

describe('OndemandBookingHistoryComponent', () => {
  let component: OndemandBookingHistoryComponent;
  let fixture: ComponentFixture<OndemandBookingHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OndemandBookingHistoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OndemandBookingHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
