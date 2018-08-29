import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PolicyComponentComponent } from './policy-component.component';

describe('PolicyComponentComponent', () => {
  let component: PolicyComponentComponent;
  let fixture: ComponentFixture<PolicyComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PolicyComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PolicyComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
