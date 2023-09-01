import { Component } from '@angular/core';

@Component({
  selector: 'app-super-esco-section-yazi',
  templateUrl: './super-esco-section-yazi.component.html',
  styleUrls: ['./super-esco-section-yazi.component.css']
})
export class SuperEscoSectionYaziComponent {
  gotoTop() {
    window.scroll({ 
      top: 0, 
      left: 0, 
      behavior: 'smooth' 
    });
  }
}
