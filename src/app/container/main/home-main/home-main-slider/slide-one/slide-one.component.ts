import { Component } from '@angular/core';
import { ButtonsService } from 'src/app/Services/buttons.service';

@Component({
  selector: 'app-slide-one',
  templateUrl: './slide-one.component.html',
  styleUrls: ['./slide-one.component.css']
})
export class SlideOneComponent {
  buttons: any;

  constructor(private service: ButtonsService) { 
  }

  ngOnInit(): void {
  this.buttons = this.service.buttons; //products are provided by a service data imported
  }

  openModal1() {
    this.buttons[0].show = true;
  }
}
