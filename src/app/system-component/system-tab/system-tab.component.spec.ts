import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemTabComponent } from './system-tab.component';

describe('SystemTabComponent', () => {
  let component: SystemTabComponent;
  let fixture: ComponentFixture<SystemTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SystemTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SystemTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
