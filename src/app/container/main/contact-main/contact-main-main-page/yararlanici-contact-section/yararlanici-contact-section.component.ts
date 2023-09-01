import { Component } from '@angular/core';

@Component({
  selector: 'app-yararlanici-contact-section',
  templateUrl: './yararlanici-contact-section.component.html',
  styleUrls: ['./yararlanici-contact-section.component.css']
})
export class YararlaniciContactSectionComponent {
  gotoTop() {
    window.scroll({ 
      top: 0, 
      left: 0, 
      behavior: 'smooth' 
    });
  }
}
