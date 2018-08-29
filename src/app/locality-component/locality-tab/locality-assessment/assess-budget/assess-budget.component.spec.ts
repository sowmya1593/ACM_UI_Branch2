import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssessBudgetComponent } from './assess-budget.component';

describe('AssessBudgetComponent', () => {
  let component: AssessBudgetComponent;
  let fixture: ComponentFixture<AssessBudgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssessBudgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssessBudgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
