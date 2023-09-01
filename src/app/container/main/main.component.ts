import { Component, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { BannersService } from 'src/app/Services/banners.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  title: string = '';
  icon: any;
  banners: any;
  appTitle: any;

  constructor(private route: Router, private service: BannersService) {
  }

  ngOnInit(): void {
    this.banners = this.service.banners; //products are provided by a service data imported
  }

  @Output() sendHeader: EventEmitter<string> = new EventEmitter<string>();

  setHeader() {
    let path = this.route.url.split('/')[1];
    this.title = decodeURIComponent(path);
    this.startIconCreate();
    this.startTitleCreate();
    this.sendHeader.emit(this.title);
  }

  startIconCreate() {
    this.icon = document.getElementById('appIcon');
    if(this.title === 'Home') {
      this.icon.href = this.banners[0].icon;
    } else if(this.title === 'Hedefimiz') {
      this.icon.href = this.banners[1].icon;
    } else if(this.title === 'Hikayemiz') {
      this.icon.href = this.banners[2].icon;
    } else if(this.title === 'Super-Esco') {
      this.icon.href = this.banners[2].icon;
    } else if(this.title === 'Iletisim') {
      this.icon.href = this.banners[3].icon;
    } else {
      this.icon.href = this.banners[0].icon;
    }
  }

  startTitleCreate() {
    this.appTitle = document.getElementById('appTitle');
    if(this.title === 'Home') {
      this.appTitle.textContent = 'Enerji Verimliliği Faaliyetlerimiz';
    } else if(this.title === 'Hedefimiz') {
      this.appTitle.textContent = 'Hedefimiz';
    } else if(this.title === 'Hikayemiz') {
      this.appTitle.textContent = 'Hikayemiz';
    } else if(this.title === 'Super-Esco') {
      this.appTitle.textContent = 'Super Esco (Yatırım)';
    } else if(this.title === 'Iletisim') {
      this.appTitle.textContent = 'Iletisim';
    } else {
      this.appTitle.textContent = '404 Sayfa Bulunamadı!';
    }
  }
}
