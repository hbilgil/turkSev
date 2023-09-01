import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhasesMainNavBarComponent } from './phases-main-nav-bar.component';

describe('PhasesMainNavBarComponent', () => {
  let component: PhasesMainNavBarComponent;
  let fixture: ComponentFixture<PhasesMainNavBarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PhasesMainNavBarComponent]
    });
    fixture = TestBed.createComponent(PhasesMainNavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
