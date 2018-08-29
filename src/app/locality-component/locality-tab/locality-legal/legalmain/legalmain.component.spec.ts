import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LegalmainComponent } from './legalmain.component';

describe('LegalmainComponent', () => {
  let component: LegalmainComponent;
  let fixture: ComponentFixture<LegalmainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LegalmainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LegalmainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
