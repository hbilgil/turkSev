import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactMainNavBarComponent } from './contact-main-nav-bar.component';

describe('ContactMainNavBarComponent', () => {
  let component: ContactMainNavBarComponent;
  let fixture: ComponentFixture<ContactMainNavBarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContactMainNavBarComponent]
    });
    fixture = TestBed.createComponent(ContactMainNavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
