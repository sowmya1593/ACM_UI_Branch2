import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemAssessmentComponent } from './system-assessment.component';

describe('SystemAssessmentComponent', () => {
  let component: SystemAssessmentComponent;
  let fixture: ComponentFixture<SystemAssessmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SystemAssessmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SystemAssessmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
