import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuditManagementComponent } from './audit-management.component';

describe('AuditManagementComponent', () => {
  let component: AuditManagementComponent;
  let fixture: ComponentFixture<AuditManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuditManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuditManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
