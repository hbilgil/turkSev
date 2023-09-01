import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperSubSecFiveComponent } from './super-sub-sec-five.component';

describe('SuperSubSecFiveComponent', () => {
  let component: SuperSubSecFiveComponent;
  let fixture: ComponentFixture<SuperSubSecFiveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SuperSubSecFiveComponent]
    });
    fixture = TestBed.createComponent(SuperSubSecFiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
