import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnerjiVerSectionSubsecsComponent } from './enerji-ver-section-subsecs.component';

describe('EnerjiVerSectionSubsecsComponent', () => {
  let component: EnerjiVerSectionSubsecsComponent;
  let fixture: ComponentFixture<EnerjiVerSectionSubsecsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EnerjiVerSectionSubsecsComponent]
    });
    fixture = TestBed.createComponent(EnerjiVerSectionSubsecsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
