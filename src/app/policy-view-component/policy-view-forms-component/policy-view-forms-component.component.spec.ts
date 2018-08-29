import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PolicyViewFormsComponentComponent } from './policy-view-forms-component.component';

describe('PolicyViewFormsComponentComponent', () => {
  let component: PolicyViewFormsComponentComponent;
  let fixture: ComponentFixture<PolicyViewFormsComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PolicyViewFormsComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PolicyViewFormsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
