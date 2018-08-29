import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlNameComponent } from './control-name.component';

describe('ControlNameComponent', () => {
  let component: ControlNameComponent;
  let fixture: ComponentFixture<ControlNameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ControlNameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ControlNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
