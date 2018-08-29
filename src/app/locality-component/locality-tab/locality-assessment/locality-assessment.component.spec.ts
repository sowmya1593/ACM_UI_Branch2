import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalityAssessmentComponent } from './locality-assessment.component';

describe('LocalityAssessmentComponent', () => {
  let component: LocalityAssessmentComponent;
  let fixture: ComponentFixture<LocalityAssessmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocalityAssessmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocalityAssessmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
