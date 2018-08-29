import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalityAuditComponent } from './locality-audit.component';

describe('LocalityAuditComponent', () => {
  let component: LocalityAuditComponent;
  let fixture: ComponentFixture<LocalityAuditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocalityAuditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocalityAuditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
