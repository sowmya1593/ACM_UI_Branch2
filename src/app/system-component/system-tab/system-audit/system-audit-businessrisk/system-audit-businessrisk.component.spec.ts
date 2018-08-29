import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemAuditBusinessriskComponent } from './system-audit-businessrisk.component';

describe('AuditBusinessriskComponent', () => {
  let component:SystemAuditBusinessriskComponent;
  let fixture: ComponentFixture<SystemAuditBusinessriskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SystemAuditBusinessriskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SystemAuditBusinessriskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
