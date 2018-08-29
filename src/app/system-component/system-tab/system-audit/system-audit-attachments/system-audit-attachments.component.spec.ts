import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemAuditAttachmentsComponent } from './system-audit-attachments.component';

describe('SystemAuditAttachmentsComponent', () => {
  let component: SystemAuditAttachmentsComponent;
  let fixture: ComponentFixture<SystemAuditAttachmentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SystemAuditAttachmentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SystemAuditAttachmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
