import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LegalformComponent } from './legalform.component';

describe('LegalformComponent', () => {
  let component: LegalformComponent;
  let fixture: ComponentFixture<LegalformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LegalformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LegalformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
