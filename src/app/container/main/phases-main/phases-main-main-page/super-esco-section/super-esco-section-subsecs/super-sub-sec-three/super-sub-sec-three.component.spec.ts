import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperSubSecThreeComponent } from './super-sub-sec-three.component';

describe('SuperSubSecThreeComponent', () => {
  let component: SuperSubSecThreeComponent;
  let fixture: ComponentFixture<SuperSubSecThreeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SuperSubSecThreeComponent]
    });
    fixture = TestBed.createComponent(SuperSubSecThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
