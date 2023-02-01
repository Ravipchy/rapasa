import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookOndemandComponent } from './book-ondemand.component';

describe('BookOndemandComponent', () => {
  let component: BookOndemandComponent;
  let fixture: ComponentFixture<BookOndemandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookOndemandComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookOndemandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
