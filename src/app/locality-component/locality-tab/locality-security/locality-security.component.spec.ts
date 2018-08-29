import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalitySecurityComponent } from './locality-security.component';

describe('LocalitySecurityComponent', () => {
  let component: LocalitySecurityComponent;
  let fixture: ComponentFixture<LocalitySecurityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocalitySecurityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocalitySecurityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
