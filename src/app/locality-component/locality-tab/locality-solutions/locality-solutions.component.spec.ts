import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalitySolutionsComponent } from './locality-solutions.component';

describe('LocalitySolutionsComponent', () => {
  let component: LocalitySolutionsComponent;
  let fixture: ComponentFixture<LocalitySolutionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocalitySolutionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocalitySolutionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
