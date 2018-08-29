import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemAuditDetailsTab } from './system-audit-details-tab.component';

describe('AuditDetailsTabComponent', () => {
  let component: SystemAuditDetailsTab;
  let fixture: ComponentFixture<SystemAuditDetailsTab>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SystemAuditDetailsTab ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SystemAuditDetailsTab);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
