import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoalsMainNavBarComponent } from './goals-main-nav-bar.component';

describe('GoalsMainNavBarComponent', () => {
  let component: GoalsMainNavBarComponent;
  let fixture: ComponentFixture<GoalsMainNavBarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GoalsMainNavBarComponent]
    });
    fixture = TestBed.createComponent(GoalsMainNavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
