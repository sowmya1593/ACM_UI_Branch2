import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssessTabComponent } from './assess-tab.component';

describe('AssessTabComponent', () => {
  let component: AssessTabComponent;
  let fixture: ComponentFixture<AssessTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssessTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssessTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
