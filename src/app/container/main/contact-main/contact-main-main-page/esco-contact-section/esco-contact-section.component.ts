import { Component } from '@angular/core';

@Component({
  selector: 'app-esco-contact-section',
  templateUrl: './esco-contact-section.component.html',
  styleUrls: ['./esco-contact-section.component.css']
})
export class EscoContactSectionComponent {
  gotoTop() {
    window.scroll({ 
      top: 0, 
      left: 0, 
      behavior: 'smooth' 
    });
  }
}
