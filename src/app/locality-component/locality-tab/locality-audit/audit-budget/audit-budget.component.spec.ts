import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuditBudgetComponent } from './audit-budget.component';

describe('AuditBudgetComponent', () => {
  let component: AuditBudgetComponent;
  let fixture: ComponentFixture<AuditBudgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuditBudgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuditBudgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
