import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalityBusinessComponent } from './locality-business.component';

describe('LocalityBusinessComponent', () => {
  let component: LocalityBusinessComponent;
  let fixture: ComponentFixture<LocalityBusinessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocalityBusinessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocalityBusinessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
