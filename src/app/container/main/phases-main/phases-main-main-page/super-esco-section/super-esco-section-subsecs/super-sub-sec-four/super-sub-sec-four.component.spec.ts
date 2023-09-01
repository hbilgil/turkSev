import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperSubSecFourComponent } from './super-sub-sec-four.component';

describe('SuperSubSecFourComponent', () => {
  let component: SuperSubSecFourComponent;
  let fixture: ComponentFixture<SuperSubSecFourComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SuperSubSecFourComponent]
    });
    fixture = TestBed.createComponent(SuperSubSecFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
