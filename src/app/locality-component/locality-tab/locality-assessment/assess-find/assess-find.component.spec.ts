import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssessFindComponent } from './assess-find.component';

describe('AssessFindComponent', () => {
  let component: AssessFindComponent;
  let fixture: ComponentFixture<AssessFindComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssessFindComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssessFindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
