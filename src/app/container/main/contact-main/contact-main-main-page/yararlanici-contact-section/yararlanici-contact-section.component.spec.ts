import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YararlaniciContactSectionComponent } from './yararlanici-contact-section.component';

describe('YararlaniciContactSectionComponent', () => {
  let component: YararlaniciContactSectionComponent;
  let fixture: ComponentFixture<YararlaniciContactSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [YararlaniciContactSectionComponent]
    });
    fixture = TestBed.createComponent(YararlaniciContactSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
