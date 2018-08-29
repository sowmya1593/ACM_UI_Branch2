import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssessDowntabsComponent } from './assess-downtabs.component';

describe('AssessDowntabsComponent', () => {
  let component: AssessDowntabsComponent;
  let fixture: ComponentFixture<AssessDowntabsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssessDowntabsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssessDowntabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
