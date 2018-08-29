import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemLegalComponent } from './system-legal.component';

describe('SystemLegalComponent', () => {
  let component: SystemLegalComponent;
  let fixture: ComponentFixture<SystemLegalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SystemLegalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SystemLegalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
