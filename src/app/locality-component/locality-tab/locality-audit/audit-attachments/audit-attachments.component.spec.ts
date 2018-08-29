import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuditAttachmentsComponent } from './audit-attachments.component';

describe('AuditAttachmentsComponent', () => {
  let component: AuditAttachmentsComponent;
  let fixture: ComponentFixture<AuditAttachmentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuditAttachmentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuditAttachmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
