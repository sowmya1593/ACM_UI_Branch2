import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalityTechnicalComponent } from './locality-technical.component';

describe('LocalityTechnicalComponent', () => {
  let component: LocalityTechnicalComponent;
  let fixture: ComponentFixture<LocalityTechnicalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocalityTechnicalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocalityTechnicalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
