import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressSectionComponent } from './address-section.component';

describe('AddressSectionComponent', () => {
  let component: AddressSectionComponent;
  let fixture: ComponentFixture<AddressSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddressSectionComponent]
    });
    fixture = TestBed.createComponent(AddressSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
