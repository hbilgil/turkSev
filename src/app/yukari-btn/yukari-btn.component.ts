import { Component } from '@angular/core';
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-yukari-btn',
  templateUrl: './yukari-btn.component.html',
  styleUrls: ['./yukari-btn.component.css']
})
export class YukariBtnComponent {

  isShow: boolean = false;
  topPosToStartShowing = 300;

  @HostListener('window:scroll')
  checkScroll() {
      
    // window의 scroll top
    // Both window.pageYOffset and document.documentElement.scrollTop returns the same result in all the cases. window.pageYOffset is not supported below IE 9.

    const scrollPosition = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0;
    
    if (scrollPosition >= this.topPosToStartShowing) {
      this.isShow = true;
    } else {
      this.isShow = false;
    }
  }

  // TODO: Cross browsing
  gotoTop() {
    window.scroll({ 
      top: 0, 
      left: 0, 
      behavior: 'smooth' 
    });
  }

}
