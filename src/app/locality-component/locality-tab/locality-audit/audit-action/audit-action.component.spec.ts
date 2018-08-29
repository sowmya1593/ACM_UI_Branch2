import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuditActionComponent } from './audit-action.component';

describe('AuditActionComponent', () => {
  let component: AuditActionComponent;
  let fixture: ComponentFixture<AuditActionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuditActionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuditActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
