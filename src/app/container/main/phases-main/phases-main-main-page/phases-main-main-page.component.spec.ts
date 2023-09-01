import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhasesMainMainPageComponent } from './phases-main-main-page.component';

describe('PhasesMainMainPageComponent', () => {
  let component: PhasesMainMainPageComponent;
  let fixture: ComponentFixture<PhasesMainMainPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PhasesMainMainPageComponent]
    });
    fixture = TestBed.createComponent(PhasesMainMainPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
