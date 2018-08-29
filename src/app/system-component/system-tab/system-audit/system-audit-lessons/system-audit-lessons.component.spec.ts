import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemAuditLessonsComponent } from './system-audit-lessons.component';

describe('SystemAuditLessonsComponent', () => {
  let component: SystemAuditLessonsComponent;
  let fixture: ComponentFixture<SystemAuditLessonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SystemAuditLessonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SystemAuditLessonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
