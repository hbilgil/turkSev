import { Component } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent {
  title: string = ""

  onButtonChanged(data: any) {//data is derived from child component of categories component
    this.title = data;
  }
}
