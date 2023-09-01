import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnerjiVerSectionComponent } from './enerji-ver-section.component';

describe('EnerjiVerSectionComponent', () => {
  let component: EnerjiVerSectionComponent;
  let fixture: ComponentFixture<EnerjiVerSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EnerjiVerSectionComponent]
    });
    fixture = TestBed.createComponent(EnerjiVerSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
