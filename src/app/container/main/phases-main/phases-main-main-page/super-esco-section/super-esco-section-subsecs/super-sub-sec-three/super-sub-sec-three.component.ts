import { Component } from '@angular/core';

@Component({
  selector: 'app-super-sub-sec-three',
  templateUrl: './super-sub-sec-three.component.html',
  styleUrls: ['./super-sub-sec-three.component.css']
})
export class SuperSubSecThreeComponent {
  gotoTop() {
    window.scroll({ 
      top: 0, 
      left: 0, 
      behavior: 'smooth' 
    });
  }
}
