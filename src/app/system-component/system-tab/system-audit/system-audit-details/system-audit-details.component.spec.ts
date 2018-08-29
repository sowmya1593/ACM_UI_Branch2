import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemAuditDetailsComponent } from './system-audit-details.component';

describe('SystemAuditDetailsComponent', () => {
  let component: SystemAuditDetailsComponent;
  let fixture: ComponentFixture<SystemAuditDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SystemAuditDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SystemAuditDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
