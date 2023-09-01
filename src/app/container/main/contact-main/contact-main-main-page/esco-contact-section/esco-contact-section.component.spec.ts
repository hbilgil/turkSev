import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EscoContactSectionComponent } from './esco-contact-section.component';

describe('EscoContactSectionComponent', () => {
  let component: EscoContactSectionComponent;
  let fixture: ComponentFixture<EscoContactSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EscoContactSectionComponent]
    });
    fixture = TestBed.createComponent(EscoContactSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
