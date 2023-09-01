import { Component } from '@angular/core';

@Component({
  selector: 'app-awareness-section',
  templateUrl: './awareness-section.component.html',
  styleUrls: ['./awareness-section.component.css']
})
export class AwarenessSectionComponent {

  gotoTop() {
    window.scroll({ 
      top: 0, 
      left: 0, 
      behavior: 'smooth' 
    });
  }
}