import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubSecFourComponent } from './sub-sec-four.component';

describe('SubSecFourComponent', () => {
  let component: SubSecFourComponent;
  let fixture: ComponentFixture<SubSecFourComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SubSecFourComponent]
    });
    fixture = TestBed.createComponent(SubSecFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
