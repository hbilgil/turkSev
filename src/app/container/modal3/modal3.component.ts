import { Component } from '@angular/core';
import { ButtonsService } from 'src/app/Services/buttons.service';

@Component({
  selector: 'app-modal3',
  templateUrl: './modal3.component.html',
  styleUrls: ['./modal3.component.css']
})
export class Modal3Component {
  buttons: any;

  constructor(private service: ButtonsService) { 
  }

  ngOnInit(): void {
  this.buttons = this.service.buttons; //products are provided by a service data imported
  }

  closeModal3() {
    this.buttons[2].show = false;
  }
}