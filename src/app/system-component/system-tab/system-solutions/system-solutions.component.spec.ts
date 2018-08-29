import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemSolutionsComponent } from './system-solutions.component';

describe('SystemSolutionsComponent', () => {
  let component: SystemSolutionsComponent;
  let fixture: ComponentFixture<SystemSolutionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SystemSolutionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SystemSolutionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
