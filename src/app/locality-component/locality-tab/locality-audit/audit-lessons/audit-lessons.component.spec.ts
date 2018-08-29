import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuditLessonsComponent } from './audit-lessons.component';

describe('AuditLessonsComponent', () => {
  let component: AuditLessonsComponent;
  let fixture: ComponentFixture<AuditLessonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuditLessonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuditLessonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
