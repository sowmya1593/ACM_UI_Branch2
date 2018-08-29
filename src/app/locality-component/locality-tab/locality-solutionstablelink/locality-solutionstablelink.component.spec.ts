import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalitySolutionstablelinkComponent } from './locality-solutionstablelink.component';

describe('LocalitySolutionstablelinkComponent', () => {
  let component: LocalitySolutionstablelinkComponent;
  let fixture: ComponentFixture<LocalitySolutionstablelinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocalitySolutionstablelinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocalitySolutionstablelinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
