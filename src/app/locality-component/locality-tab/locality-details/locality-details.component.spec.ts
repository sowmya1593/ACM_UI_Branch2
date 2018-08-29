import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalityDetailsComponent } from './locality-details.component';

describe('LocalityDetailsComponent', () => {
  let component: LocalityDetailsComponent;
  let fixture: ComponentFixture<LocalityDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocalityDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocalityDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
