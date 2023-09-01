import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AwarenessSectionComponent } from './awareness-section.component';

describe('AwarenessSectionComponent', () => {
  let component: AwarenessSectionComponent;
  let fixture: ComponentFixture<AwarenessSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AwarenessSectionComponent]
    });
    fixture = TestBed.createComponent(AwarenessSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
