import { Component } from '@angular/core';
import { ButtonsService } from 'src/app/Services/buttons.service';

@Component({
  selector: 'app-slide-two',
  templateUrl: './slide-two.component.html',
  styleUrls: ['./slide-two.component.css']
})
export class SlideTwoComponent {
  buttons: any;

  constructor(private service: ButtonsService) { 
  }

  ngOnInit(): void {
  this.buttons = this.service.buttons; //products are provided by a service data imported
  }

  openModal2() {
    this.buttons[1].show = true;
  }
}
