import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuditFirstComponent } from './audit-first.component';

describe('AuditFirstComponent', () => {
  let component: AuditFirstComponent;
  let fixture: ComponentFixture<AuditFirstComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuditFirstComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuditFirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
