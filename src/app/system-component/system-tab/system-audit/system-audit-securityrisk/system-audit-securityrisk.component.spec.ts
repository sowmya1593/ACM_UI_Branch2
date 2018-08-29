import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemAuditSecurityriskComponent } from './system-audit-securityrisk.component';

describe('SystemAuditSecurityriskComponent', () => {
  let component: SystemAuditSecurityriskComponent;
  let fixture: ComponentFixture<SystemAuditSecurityriskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SystemAuditSecurityriskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SystemAuditSecurityriskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
