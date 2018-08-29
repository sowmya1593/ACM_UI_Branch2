import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemAssessTabComponent } from './system-assess-tab.component';

describe('AssessTabComponent', () => {
  let component: SystemAssessTabComponent;
  let fixture: ComponentFixture<SystemAssessTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SystemAssessTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SystemAssessTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
