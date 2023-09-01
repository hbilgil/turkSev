import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhasesMainComponent } from './phases-main.component';

describe('PhasesMainComponent', () => {
  let component: PhasesMainComponent;
  let fixture: ComponentFixture<PhasesMainComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PhasesMainComponent]
    });
    fixture = TestBed.createComponent(PhasesMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
