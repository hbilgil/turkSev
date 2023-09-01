import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubSecThreeComponent } from './sub-sec-three.component';

describe('SubSecThreeComponent', () => {
  let component: SubSecThreeComponent;
  let fixture: ComponentFixture<SubSecThreeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SubSecThreeComponent]
    });
    fixture = TestBed.createComponent(SubSecThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
