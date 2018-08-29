import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalitysolutionsformComponent } from './localitysolutionsform.component';

describe('LocalitysolutionsformComponent', () => {
  let component: LocalitysolutionsformComponent;
  let fixture: ComponentFixture<LocalitysolutionsformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocalitysolutionsformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocalitysolutionsformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
