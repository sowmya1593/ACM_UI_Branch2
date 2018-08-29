import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemAuditRecomendationsComponent } from './system-audit-recomendations.component';

describe('SystemAuditRecomendationsComponent', () => {
  let component: SystemAuditRecomendationsComponent;
  let fixture: ComponentFixture<SystemAuditRecomendationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SystemAuditRecomendationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SystemAuditRecomendationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
