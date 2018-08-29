import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemDetailsComponent } from './system-details.component';

describe('SystemDetailsComponent', () => {
  let component: SystemDetailsComponent;
  let fixture: ComponentFixture<SystemDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SystemDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SystemDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
