import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemAddComponentComponent } from './system-add-component.component';

describe('SystemAddComponentComponent', () => {
  let component: SystemAddComponentComponent;
  let fixture: ComponentFixture<SystemAddComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SystemAddComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SystemAddComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
