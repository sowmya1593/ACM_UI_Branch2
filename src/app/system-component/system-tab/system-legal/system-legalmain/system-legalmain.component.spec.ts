import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemLegalmainComponent } from './system-legalmain.component';

describe('SystemLegalmainComponent', () => {
  let component: SystemLegalmainComponent;
  let fixture: ComponentFixture<SystemLegalmainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SystemLegalmainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SystemLegalmainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
