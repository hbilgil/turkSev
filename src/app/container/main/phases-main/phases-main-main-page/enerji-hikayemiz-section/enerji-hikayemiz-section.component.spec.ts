import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnerjiHikayemizSectionComponent } from './enerji-hikayemiz-section.component';

describe('EnerjiHikayemizSectionComponent', () => {
  let component: EnerjiHikayemizSectionComponent;
  let fixture: ComponentFixture<EnerjiHikayemizSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EnerjiHikayemizSectionComponent]
    });
    fixture = TestBed.createComponent(EnerjiHikayemizSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
