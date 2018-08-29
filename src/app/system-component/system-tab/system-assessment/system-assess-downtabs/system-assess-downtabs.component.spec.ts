import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemAssessDowntabsComponent } from './system-assess-downtabs.component';

describe('SystemAssessDowntabsComponent', () => {
  let component: SystemAssessDowntabsComponent;
  let fixture: ComponentFixture<SystemAssessDowntabsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SystemAssessDowntabsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SystemAssessDowntabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
