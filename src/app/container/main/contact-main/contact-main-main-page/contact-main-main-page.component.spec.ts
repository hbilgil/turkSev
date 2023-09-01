import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactMainMainPageComponent } from './contact-main-main-page.component';

describe('ContactMainMainPageComponent', () => {
  let component: ContactMainMainPageComponent;
  let fixture: ComponentFixture<ContactMainMainPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContactMainMainPageComponent]
    });
    fixture = TestBed.createComponent(ContactMainMainPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
