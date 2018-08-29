import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemTechnicalComponent } from './system-technical.component';

describe('SystemTechnicalComponent', () => {
  let component: SystemTechnicalComponent;
  let fixture: ComponentFixture<SystemTechnicalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SystemTechnicalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SystemTechnicalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
