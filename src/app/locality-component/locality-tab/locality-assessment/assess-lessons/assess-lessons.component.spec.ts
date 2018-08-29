import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssessLessonsComponent } from './assess-lessons.component';

describe('AssessLessonsComponent', () => {
  let component: AssessLessonsComponent;
  let fixture: ComponentFixture<AssessLessonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssessLessonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssessLessonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
