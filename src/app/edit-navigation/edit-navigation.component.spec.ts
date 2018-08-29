import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditNavigationComponent } from './edit-navigation.component';

describe('EditNavigationComponent', () => {
  let component: EditNavigationComponent;
  let fixture: ComponentFixture<EditNavigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditNavigationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
