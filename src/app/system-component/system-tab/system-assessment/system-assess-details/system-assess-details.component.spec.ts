import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemAssessDetailsComponent } from './system-assess-details.component';

describe('SystemAssessDetailsComponent', () => {
  let component: SystemAssessDetailsComponent;
  let fixture: ComponentFixture<SystemAssessDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SystemAssessDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SystemAssessDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
