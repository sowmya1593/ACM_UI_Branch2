import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemSecurityComponent } from './system-security.component';

describe('SystemSecurityComponent', () => {
  let component:SystemSecurityComponent;
  let fixture: ComponentFixture<SystemSecurityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SystemSecurityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SystemSecurityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
