import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoalsMainComponent } from './goals-main.component';

describe('GoalsMainComponent', () => {
  let component: GoalsMainComponent;
  let fixture: ComponentFixture<GoalsMainComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GoalsMainComponent]
    });
    fixture = TestBed.createComponent(GoalsMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
