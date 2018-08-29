import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SolutionsFormsComponentComponent } from './solutions-forms-component.component';

describe('SolutionsFormsComponentComponent', () => {
  let component: SolutionsFormsComponentComponent;
  let fixture: ComponentFixture<SolutionsFormsComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SolutionsFormsComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SolutionsFormsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
