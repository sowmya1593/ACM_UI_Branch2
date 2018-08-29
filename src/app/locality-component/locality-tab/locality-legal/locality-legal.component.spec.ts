import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalityLegalComponent } from './locality-legal.component';

describe('LocalityLegalComponent', () => {
  let component: LocalityLegalComponent;
  let fixture: ComponentFixture<LocalityLegalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocalityLegalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocalityLegalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
