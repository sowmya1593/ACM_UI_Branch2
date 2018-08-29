import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalityComponentComponent } from './locality-component.component';

describe('LocalityComponentComponent', () => {
  let component: LocalityComponentComponent;
  let fixture: ComponentFixture<LocalityComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocalityComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocalityComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
