import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssessSecurityComponent } from './assess-security.component';

describe('AssessSecurityComponent', () => {
  let component: AssessSecurityComponent;
  let fixture: ComponentFixture<AssessSecurityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssessSecurityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssessSecurityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
