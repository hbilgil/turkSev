import { Component } from '@angular/core';

@Component({
  selector: 'app-enerji-hikayemiz-section',
  templateUrl: './enerji-hikayemiz-section.component.html',
  styleUrls: ['./enerji-hikayemiz-section.component.css']
})
export class EnerjiHikayemizSectionComponent {

  gotoTop() {
    window.scroll({ 
      top: 0, 
      left: 0, 
      behavior: 'smooth' 
    });
  }

}
