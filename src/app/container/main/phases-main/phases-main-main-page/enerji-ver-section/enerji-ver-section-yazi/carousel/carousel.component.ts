import { Component, OnInit } from '@angular/core';
import { IzlemelerService } from 'src/app/Services/izlemeler.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  photos: any;

  constructor(private service: IzlemelerService) { 
  }

  ngOnInit(): void {
  this.photos = this.service.photos; //products are provided by a service data imported
  }

}
