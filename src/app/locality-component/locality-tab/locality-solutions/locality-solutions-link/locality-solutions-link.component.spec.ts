import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalitySolutionsLinkComponent } from './locality-solutions-link.component';

describe('LocalitySolutionsLinkComponent', () => {
  let component: LocalitySolutionsLinkComponent;
  let fixture: ComponentFixture<LocalitySolutionsLinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocalitySolutionsLinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocalitySolutionsLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
