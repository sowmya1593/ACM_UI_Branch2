import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalityAddComponentComponent } from './locality-add-component.component';

describe('LocalityAddComponentComponent', () => {
  let component: LocalityAddComponentComponent;
  let fixture: ComponentFixture<LocalityAddComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocalityAddComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocalityAddComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
