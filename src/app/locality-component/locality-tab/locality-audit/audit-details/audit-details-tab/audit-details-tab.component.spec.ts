import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuditDetailsTabComponent } from './audit-details-tab.component';

describe('AuditDetailsTabComponent', () => {
  let component: AuditDetailsTabComponent;
  let fixture: ComponentFixture<AuditDetailsTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuditDetailsTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuditDetailsTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
