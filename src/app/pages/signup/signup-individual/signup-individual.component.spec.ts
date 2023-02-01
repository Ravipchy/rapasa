import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupIndividualComponent } from './signup-individual.component';

describe('SignupIndividualComponent', () => {
  let component: SignupIndividualComponent;
  let fixture: ComponentFixture<SignupIndividualComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignupIndividualComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignupIndividualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
