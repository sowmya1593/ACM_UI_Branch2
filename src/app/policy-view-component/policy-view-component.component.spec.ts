import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PolicyViewComponentComponent } from './policy-view-component.component';

describe('PolicyViewComponentComponent', () => {
  let component: PolicyViewComponentComponent;
  let fixture: ComponentFixture<PolicyViewComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PolicyViewComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PolicyViewComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
