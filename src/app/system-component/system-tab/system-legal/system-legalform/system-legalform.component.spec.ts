import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemLegalformComponent } from './system-legalform.component';

describe('SystemLegalformComponent', () => {
  let component: SystemLegalformComponent;
  let fixture: ComponentFixture<SystemLegalformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SystemLegalformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SystemLegalformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
