import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalityTabComponent } from './locality-tab.component';

describe('LocalityTabComponent', () => {
  let component: LocalityTabComponent;
  let fixture: ComponentFixture<LocalityTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocalityTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocalityTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
