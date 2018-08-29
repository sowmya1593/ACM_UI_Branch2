import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemSolutionsLinkComponent } from './system-solutions-link.component';

describe('LocalitySolutionsLinkComponent', () => {
  let component: SystemSolutionsLinkComponent;
  let fixture: ComponentFixture<SystemSolutionsLinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SystemSolutionsLinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SystemSolutionsLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
