import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuditSecurityriskComponent } from './audit-securityrisk.component';

describe('AuditSecurityriskComponent', () => {
  let component: AuditSecurityriskComponent;
  let fixture: ComponentFixture<AuditSecurityriskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuditSecurityriskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuditSecurityriskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
