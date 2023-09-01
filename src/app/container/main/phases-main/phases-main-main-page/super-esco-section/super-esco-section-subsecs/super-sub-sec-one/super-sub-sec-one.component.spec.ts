import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperSubSecOneComponent } from './super-sub-sec-one.component';

describe('SuperSubSecOneComponent', () => {
  let component: SuperSubSecOneComponent;
  let fixture: ComponentFixture<SuperSubSecOneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SuperSubSecOneComponent]
    });
    fixture = TestBed.createComponent(SuperSubSecOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
