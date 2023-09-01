import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideThreeComponent } from './slide-three.component';

describe('SlideThreeComponent', () => {
  let component: SlideThreeComponent;
  let fixture: ComponentFixture<SlideThreeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SlideThreeComponent]
    });
    fixture = TestBed.createComponent(SlideThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
