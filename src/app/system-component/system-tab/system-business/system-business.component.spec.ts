import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemBusinessComponent } from './system-business.component';

describe('SystemBusinessComponent', () => {
  let component: SystemBusinessComponent;
  let fixture: ComponentFixture<SystemBusinessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SystemBusinessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SystemBusinessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
