import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemAuditFirstComponent } from './system-audit-first.component';

describe('SystemAuditFirstComponent', () => {
  let component: SystemAuditFirstComponent;
  let fixture: ComponentFixture<SystemAuditFirstComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SystemAuditFirstComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SystemAuditFirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
