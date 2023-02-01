import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentSandboxComponent } from './component-sandbox.component';

describe('ComponentSandboxComponent', () => {
  let component: ComponentSandboxComponent;
  let fixture: ComponentFixture<ComponentSandboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentSandboxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentSandboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
