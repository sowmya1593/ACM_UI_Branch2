import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SolutionTableComponent } from './solution-table.component';

describe('SolutionTableComponent', () => {
  let component: SolutionTableComponent;
  let fixture: ComponentFixture<SolutionTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SolutionTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SolutionTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
