import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalityViewComponentComponent } from './locality-view-component.component';

describe('LocalityViewComponentComponent', () => {
  let component: LocalityViewComponentComponent;
  let fixture: ComponentFixture<LocalityViewComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocalityViewComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocalityViewComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
