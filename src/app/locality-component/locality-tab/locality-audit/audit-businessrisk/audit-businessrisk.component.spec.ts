import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuditBusinessriskComponent } from './audit-businessrisk.component';

describe('AuditBusinessriskComponent', () => {
  let component: AuditBusinessriskComponent;
  let fixture: ComponentFixture<AuditBusinessriskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuditBusinessriskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuditBusinessriskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
