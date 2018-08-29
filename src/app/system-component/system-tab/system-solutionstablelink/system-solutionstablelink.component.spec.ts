import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemSolutionstablelinkComponent } from './system-solutionstablelink.component';

describe('SystemSolutionstablelinkComponent', () => {
  let component: SystemSolutionstablelinkComponent;
  let fixture: ComponentFixture<SystemSolutionstablelinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SystemSolutionstablelinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SystemSolutionstablelinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
