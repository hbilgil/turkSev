import { Component, Input } from '@angular/core';
import { BannersService } from 'src/app/Services/banners.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent {
  banners: any;

  constructor(private service: BannersService) { 
  }

  ngOnInit(): void {
  this.banners = this.service.banners; //products are provided by a service data imported
  }

  @Input() title: string = '';
}