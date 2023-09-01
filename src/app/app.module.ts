import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgImageSliderModule } from 'ng-image-slider';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { SocialComponent } from './social/social.component';
import { ContainerComponent } from './container/container.component';
import { YukariBtnComponent } from './yukari-btn/yukari-btn.component';
import { HeaderComponent } from './container/header/header.component';
import { MainComponent } from './container/main/main.component';
import { HomeMainComponent } from './container/main/home-main/home-main.component';
import { GoalsMainComponent } from './container/main/goals-main/goals-main.component';
import { PhasesMainComponent } from './container/main/phases-main/phases-main.component';
import { ContactMainComponent } from './container/main/contact-main/contact-main.component';
import { Modal1Component } from './container/modal1/modal1.component';
import { Modal2Component } from './container/modal2/modal2.component';
import { Modal3Component } from './container/modal3/modal3.component';
import { FooterComponent } from './container/footer/footer.component';
import { ContactMainNavBarComponent } from './container/main/contact-main/contact-main-nav-bar/contact-main-nav-bar.component';
import { ContactMainMainPageComponent } from './container/main/contact-main/contact-main-main-page/contact-main-main-page.component';
import { AddressSectionComponent } from './container/main/contact-main/contact-main-main-page/address-section/address-section.component';
import { EscoContactSectionComponent } from './container/main/contact-main/contact-main-main-page/esco-contact-section/esco-contact-section.component';
import { YararlaniciContactSectionComponent } from './container/main/contact-main/contact-main-main-page/yararlanici-contact-section/yararlanici-contact-section.component';
import { GoalsMainNavBarComponent } from './container/main/goals-main/goals-main-nav-bar/goals-main-nav-bar.component';
import { GoalsMainMainPageComponent } from './container/main/goals-main/goals-main-main-page/goals-main-main-page.component';
import { AwarenessSectionComponent } from './container/main/goals-main/goals-main-main-page/awareness-section/awareness-section.component';
import { VisionSectionComponent } from './container/main/goals-main/goals-main-main-page/vision-section/vision-section.component';
import { HomeMainSliderComponent } from './container/main/home-main/home-main-slider/home-main-slider.component';
import { SlideOneComponent } from './container/main/home-main/home-main-slider/slide-one/slide-one.component';
import { SlideTwoComponent } from './container/main/home-main/home-main-slider/slide-two/slide-two.component';
import { SlideThreeComponent } from './container/main/home-main/home-main-slider/slide-three/slide-three.component';
import { PhasesMainNavBarComponent } from './container/main/phases-main/phases-main-nav-bar/phases-main-nav-bar.component';
import { PhasesMainMainPageComponent } from './container/main/phases-main/phases-main-main-page/phases-main-main-page.component';
import { EnerjiHikayemizSectionComponent } from './container/main/phases-main/phases-main-main-page/enerji-hikayemiz-section/enerji-hikayemiz-section.component';
import { KaynakVerSectionComponent } from './container/main/phases-main/phases-main-main-page/kaynak-ver-section/kaynak-ver-section.component';
import { EnerjiVerSectionComponent } from './container/main/phases-main/phases-main-main-page/enerji-ver-section/enerji-ver-section.component';
import { SuperEscoSectionComponent } from './container/main/phases-main/phases-main-main-page/super-esco-section/super-esco-section.component';
import { EnerjiVerSectionYaziComponent } from './container/main/phases-main/phases-main-main-page/enerji-ver-section/enerji-ver-section-yazi/enerji-ver-section-yazi.component';
import { EnerjiVerSectionSubsecsComponent } from './container/main/phases-main/phases-main-main-page/enerji-ver-section/enerji-ver-section-subsecs/enerji-ver-section-subsecs.component';
import { SuperEscoSectionYaziComponent } from './container/main/phases-main/phases-main-main-page/super-esco-section/super-esco-section-yazi/super-esco-section-yazi.component';
import { SuperEscoSectionSubsecsComponent } from './container/main/phases-main/phases-main-main-page/super-esco-section/super-esco-section-subsecs/super-esco-section-subsecs.component';
import { SubSecOneComponent } from './container/main/phases-main/phases-main-main-page/enerji-ver-section/enerji-ver-section-subsecs/sub-sec-one/sub-sec-one.component';
import { SubSecTwoComponent } from './container/main/phases-main/phases-main-main-page/enerji-ver-section/enerji-ver-section-subsecs/sub-sec-two/sub-sec-two.component';
import { SubSecThreeComponent } from './container/main/phases-main/phases-main-main-page/enerji-ver-section/enerji-ver-section-subsecs/sub-sec-three/sub-sec-three.component';
import { SubSecFourComponent } from './container/main/phases-main/phases-main-main-page/enerji-ver-section/enerji-ver-section-subsecs/sub-sec-four/sub-sec-four.component';
import { InfographicsComponent } from './container/main/phases-main/phases-main-main-page/enerji-ver-section/enerji-ver-section-yazi/infographics/infographics.component';
import { CarouselComponent } from './container/main/phases-main/phases-main-main-page/enerji-ver-section/enerji-ver-section-yazi/carousel/carousel.component';
import { SuperSubSecOneComponent } from './container/main/phases-main/phases-main-main-page/super-esco-section/super-esco-section-subsecs/super-sub-sec-one/super-sub-sec-one.component';
import { SuperSubSecTwoComponent } from './container/main/phases-main/phases-main-main-page/super-esco-section/super-esco-section-subsecs/super-sub-sec-two/super-sub-sec-two.component';
import { SuperSubSecThreeComponent } from './container/main/phases-main/phases-main-main-page/super-esco-section/super-esco-section-subsecs/super-sub-sec-three/super-sub-sec-three.component';
import { SuperSubSecFourComponent } from './container/main/phases-main/phases-main-main-page/super-esco-section/super-esco-section-subsecs/super-sub-sec-four/super-sub-sec-four.component';
import { SuperSubSecFiveComponent } from './container/main/phases-main/phases-main-main-page/super-esco-section/super-esco-section-subsecs/super-sub-sec-five/super-sub-sec-five.component';
import { ErrorNotFoundComponent } from './error-not-found/error-not-found.component';

import { IzlemelerService } from './Services/izlemeler.service';
import { ButtonsService } from './Services/buttons.service';
import { BannersService } from './Services/banners.service';

@NgModule({
  declarations: [
    AppComponent,
    SocialComponent,
    ContainerComponent,
    YukariBtnComponent,
    HeaderComponent,
    MainComponent,
    HomeMainComponent,
    GoalsMainComponent,
    PhasesMainComponent,
    ContactMainComponent,
    Modal1Component,
    Modal2Component,
    Modal3Component,
    FooterComponent,
    ContactMainNavBarComponent,
    ContactMainMainPageComponent,
    AddressSectionComponent,
    EscoContactSectionComponent,
    YararlaniciContactSectionComponent,
    GoalsMainNavBarComponent,
    GoalsMainMainPageComponent,
    AwarenessSectionComponent,
    VisionSectionComponent,
    HomeMainSliderComponent,
    SlideOneComponent,
    SlideTwoComponent,
    SlideThreeComponent,
    PhasesMainNavBarComponent,
    PhasesMainMainPageComponent,
    EnerjiHikayemizSectionComponent,
    KaynakVerSectionComponent,
    EnerjiVerSectionComponent,
    SuperEscoSectionComponent,
    EnerjiVerSectionYaziComponent,
    EnerjiVerSectionSubsecsComponent,
    SuperEscoSectionYaziComponent,
    SuperEscoSectionSubsecsComponent,
    SubSecOneComponent,
    SubSecTwoComponent,
    SubSecThreeComponent,
    SubSecFourComponent,
    InfographicsComponent,
    CarouselComponent,
    SuperSubSecOneComponent,
    SuperSubSecTwoComponent,
    SuperSubSecThreeComponent,
    SuperSubSecFourComponent,
    SuperSubSecFiveComponent,
    ErrorNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgImageSliderModule
  ],
  providers: [
    IzlemelerService,
    ButtonsService,
    BannersService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }