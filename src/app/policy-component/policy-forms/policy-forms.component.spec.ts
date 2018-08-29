import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PolicyFormsComponent } from './policy-forms.component';

describe('PolicyFormsComponent', () => {
  let component: PolicyFormsComponent;
  let fixture: ComponentFixture<PolicyFormsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PolicyFormsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PolicyFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
