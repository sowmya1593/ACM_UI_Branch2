import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssessAttachmentsComponent } from './assess-attachments.component';

describe('AssessAttachmentsComponent', () => {
  let component: AssessAttachmentsComponent;
  let fixture: ComponentFixture<AssessAttachmentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssessAttachmentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssessAttachmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
