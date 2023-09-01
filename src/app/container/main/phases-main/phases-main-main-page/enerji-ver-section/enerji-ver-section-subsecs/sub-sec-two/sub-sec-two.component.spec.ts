import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubSecTwoComponent } from './sub-sec-two.component';

describe('SubSecTwoComponent', () => {
  let component: SubSecTwoComponent;
  let fixture: ComponentFixture<SubSecTwoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SubSecTwoComponent]
    });
    fixture = TestBed.createComponent(SubSecTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
