import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssessBusinessComponent } from './assess-business.component';

describe('AssessBusinessComponent', () => {
  let component: AssessBusinessComponent;
  let fixture: ComponentFixture<AssessBusinessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssessBusinessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssessBusinessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
