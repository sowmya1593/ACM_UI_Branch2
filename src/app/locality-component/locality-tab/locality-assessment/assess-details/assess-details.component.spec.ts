import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssessDetailsComponent } from './assess-details.component';

describe('AssessDetailsComponent', () => {
  let component: AssessDetailsComponent;
  let fixture: ComponentFixture<AssessDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssessDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssessDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
