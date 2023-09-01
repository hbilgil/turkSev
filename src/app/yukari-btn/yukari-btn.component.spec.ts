import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YukariBtnComponent } from './yukari-btn.component';

describe('YukariBtnComponent', () => {
  let component: YukariBtnComponent;
  let fixture: ComponentFixture<YukariBtnComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [YukariBtnComponent]
    });
    fixture = TestBed.createComponent(YukariBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
