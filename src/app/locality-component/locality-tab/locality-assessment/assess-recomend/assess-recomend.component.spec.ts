import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssessRecomendComponent } from './assess-recomend.component';

describe('AssessRecomendComponent', () => {
  let component: AssessRecomendComponent;
  let fixture: ComponentFixture<AssessRecomendComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssessRecomendComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssessRecomendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
