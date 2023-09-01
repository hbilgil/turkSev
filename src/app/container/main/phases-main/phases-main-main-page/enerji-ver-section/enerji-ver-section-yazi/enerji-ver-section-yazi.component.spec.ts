import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnerjiVerSectionYaziComponent } from './enerji-ver-section-yazi.component';

describe('EnerjiVerSectionYaziComponent', () => {
  let component: EnerjiVerSectionYaziComponent;
  let fixture: ComponentFixture<EnerjiVerSectionYaziComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EnerjiVerSectionYaziComponent]
    });
    fixture = TestBed.createComponent(EnerjiVerSectionYaziComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
