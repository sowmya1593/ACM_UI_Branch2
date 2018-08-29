import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuditRecomendationsComponent } from './audit-recomendations.component';

describe('AuditRecomendationsComponent', () => {
  let component: AuditRecomendationsComponent;
  let fixture: ComponentFixture<AuditRecomendationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuditRecomendationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuditRecomendationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
