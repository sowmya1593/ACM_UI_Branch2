import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSolutionFormComponent } from './edit-solution-form.component';

describe('EditSolutionFormComponent', () => {
  let component: EditSolutionFormComponent;
  let fixture: ComponentFixture<EditSolutionFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditSolutionFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditSolutionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
