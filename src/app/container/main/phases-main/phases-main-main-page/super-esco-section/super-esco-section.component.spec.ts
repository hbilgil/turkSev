import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperEscoSectionComponent } from './super-esco-section.component';

describe('SuperEscoSectionComponent', () => {
  let component: SuperEscoSectionComponent;
  let fixture: ComponentFixture<SuperEscoSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SuperEscoSectionComponent]
    });
    fixture = TestBed.createComponent(SuperEscoSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
