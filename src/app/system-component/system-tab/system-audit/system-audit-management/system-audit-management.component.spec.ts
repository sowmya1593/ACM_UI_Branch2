import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemAuditManagementComponent } from './system-audit-management.component';

describe('SystemAuditManagementComponent', () => {
  let component: SystemAuditManagementComponent;
  let fixture: ComponentFixture<SystemAuditManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SystemAuditManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SystemAuditManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
