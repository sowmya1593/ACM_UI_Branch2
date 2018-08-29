import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemAuditBudgetComponent } from './system-audit-budget.component';

describe('SystemAuditBudgetComponent', () => {
  let component: SystemAuditBudgetComponent;
  let fixture: ComponentFixture<SystemAuditBudgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SystemAuditBudgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SystemAuditBudgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
