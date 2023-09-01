import { Component } from '@angular/core';
import { ButtonsService } from 'src/app/Services/buttons.service';

@Component({
  selector: 'app-modal1',
  templateUrl: './modal1.component.html',
  styleUrls: ['./modal1.component.css']
})
export class Modal1Component {
  buttons: any;

  constructor(private service: ButtonsService) { 
  }

  ngOnInit(): void {
  this.buttons = this.service.buttons; //products are provided by a service data imported
  }

  closeModal1() {
    this.buttons[0].show = false;
  }
}
