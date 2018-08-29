import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemAuditActionComponent } from './system-audit-action.component';

describe('SystemAuditActionComponent', () => {
  let component: SystemAuditActionComponent;
  let fixture: ComponentFixture<SystemAuditActionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SystemAuditActionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SystemAuditActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
