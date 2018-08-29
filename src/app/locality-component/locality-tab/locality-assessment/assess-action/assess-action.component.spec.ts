import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssessActionComponent } from './assess-action.component';

describe('AssessActionComponent', () => {
  let component: AssessActionComponent;
  let fixture: ComponentFixture<AssessActionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssessActionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssessActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
