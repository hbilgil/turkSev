import { Component } from '@angular/core';

@Component({
  selector: 'app-enerji-ver-section-yazi',
  templateUrl: './enerji-ver-section-yazi.component.html',
  styleUrls: ['./enerji-ver-section-yazi.component.css']
})
export class EnerjiVerSectionYaziComponent {
  gotoTop() {
    window.scroll({ 
      top: 0, 
      left: 0, 
      behavior: 'smooth' 
    });
  }
}
