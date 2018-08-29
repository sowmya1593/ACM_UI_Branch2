import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SolutionViewComponentComponent } from './solution-view-component.component';

describe('SolutionViewComponentComponent', () => {
  let component: SolutionViewComponentComponent;
  let fixture: ComponentFixture<SolutionViewComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SolutionViewComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SolutionViewComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
