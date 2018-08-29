import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemAuditFindingsComponent } from './system-audit-findings.component';

describe('AuditFindingsComponent', () => {
  let component: SystemAuditFindingsComponent;
  let fixture: ComponentFixture<SystemAuditFindingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SystemAuditFindingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SystemAuditFindingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
