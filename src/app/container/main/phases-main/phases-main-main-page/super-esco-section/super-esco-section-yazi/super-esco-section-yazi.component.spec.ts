import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperEscoSectionYaziComponent } from './super-esco-section-yazi.component';

describe('SuperEscoSectionYaziComponent', () => {
  let component: SuperEscoSectionYaziComponent;
  let fixture: ComponentFixture<SuperEscoSectionYaziComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SuperEscoSectionYaziComponent]
    });
    fixture = TestBed.createComponent(SuperEscoSectionYaziComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
