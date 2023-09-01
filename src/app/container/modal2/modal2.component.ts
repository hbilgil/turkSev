import { Component } from '@angular/core';
import { ButtonsService } from 'src/app/Services/buttons.service';

@Component({
  selector: 'app-modal2',
  templateUrl: './modal2.component.html',
  styleUrls: ['./modal2.component.css']
})
export class Modal2Component {
  buttons: any;

  constructor(private service: ButtonsService) { 
  }

  ngOnInit(): void {
  this.buttons = this.service.buttons; //products are provided by a service data imported
  }

  closeModal2() {
    this.buttons[1].show = false;
  }
}
