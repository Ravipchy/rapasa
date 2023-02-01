import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PermanentBookingHistoryComponent } from './permanent-booking-history.component';

describe('PermanentBookingHistoryComponent', () => {
  let component: PermanentBookingHistoryComponent;
  let fixture: ComponentFixture<PermanentBookingHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PermanentBookingHistoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PermanentBookingHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
