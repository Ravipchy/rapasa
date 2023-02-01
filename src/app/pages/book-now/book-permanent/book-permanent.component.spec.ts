import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookPermanentComponent } from './book-permanent.component';

describe('BookPermanentComponent', () => {
  let component: BookPermanentComponent;
  let fixture: ComponentFixture<BookPermanentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookPermanentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookPermanentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
