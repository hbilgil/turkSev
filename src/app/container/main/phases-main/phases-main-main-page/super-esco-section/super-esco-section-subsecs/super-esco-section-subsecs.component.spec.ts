import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperEscoSectionSubsecsComponent } from './super-esco-section-subsecs.component';

describe('SuperEscoSectionSubsecsComponent', () => {
  let component: SuperEscoSectionSubsecsComponent;
  let fixture: ComponentFixture<SuperEscoSectionSubsecsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SuperEscoSectionSubsecsComponent]
    });
    fixture = TestBed.createComponent(SuperEscoSectionSubsecsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
