import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorsComponentComponent } from './vendors-component.component';

describe('VendorsComponentComponent', () => {
  let component: VendorsComponentComponent;
  let fixture: ComponentFixture<VendorsComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendorsComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VendorsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
