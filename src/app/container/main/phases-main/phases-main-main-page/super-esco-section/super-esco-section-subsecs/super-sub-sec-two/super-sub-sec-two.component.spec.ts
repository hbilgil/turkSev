import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperSubSecTwoComponent } from './super-sub-sec-two.component';

describe('SuperSubSecTwoComponent', () => {
  let component: SuperSubSecTwoComponent;
  let fixture: ComponentFixture<SuperSubSecTwoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SuperSubSecTwoComponent]
    });
    fixture = TestBed.createComponent(SuperSubSecTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
