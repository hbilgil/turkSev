import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubSecOneComponent } from './sub-sec-one.component';

describe('SubSecOneComponent', () => {
  let component: SubSecOneComponent;
  let fixture: ComponentFixture<SubSecOneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SubSecOneComponent]
    });
    fixture = TestBed.createComponent(SubSecOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
