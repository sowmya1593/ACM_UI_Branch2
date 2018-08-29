import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemViewComponentComponent } from './system-view-component.component';

describe('LocalityViewComponentComponent', () => {
  let component: SystemViewComponentComponent;
  let fixture: ComponentFixture<SystemViewComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SystemViewComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SystemViewComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
