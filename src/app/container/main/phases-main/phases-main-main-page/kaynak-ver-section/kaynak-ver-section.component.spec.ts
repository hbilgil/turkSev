import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KaynakVerSectionComponent } from './kaynak-ver-section.component';

describe('KaynakVerSectionComponent', () => {
  let component: KaynakVerSectionComponent;
  let fixture: ComponentFixture<KaynakVerSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KaynakVerSectionComponent]
    });
    fixture = TestBed.createComponent(KaynakVerSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
