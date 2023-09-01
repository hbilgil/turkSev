import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoalsMainMainPageComponent } from './goals-main-main-page.component';

describe('GoalsMainMainPageComponent', () => {
  let component: GoalsMainMainPageComponent;
  let fixture: ComponentFixture<GoalsMainMainPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GoalsMainMainPageComponent]
    });
    fixture = TestBed.createComponent(GoalsMainMainPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
