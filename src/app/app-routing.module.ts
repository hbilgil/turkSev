import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeMainComponent } from './container/main/home-main/home-main.component';
import { GoalsMainComponent } from './container/main/goals-main/goals-main.component';
import { PhasesMainComponent } from './container/main/phases-main/phases-main.component';
import { ContactMainComponent } from './container/main/contact-main/contact-main.component';
import { AwarenessSectionComponent } from './container/main/goals-main/goals-main-main-page/awareness-section/awareness-section.component';
import { VisionSectionComponent } from './container/main/goals-main/goals-main-main-page/vision-section/vision-section.component';
import { EnerjiHikayemizSectionComponent } from './container/main/phases-main/phases-main-main-page/enerji-hikayemiz-section/enerji-hikayemiz-section.component';
import { KaynakVerSectionComponent } from './container/main/phases-main/phases-main-main-page/kaynak-ver-section/kaynak-ver-section.component';
import { EnerjiVerSectionComponent } from './container/main/phases-main/phases-main-main-page/enerji-ver-section/enerji-ver-section.component';
import { SuperEscoSectionComponent } from './container/main/phases-main/phases-main-main-page/super-esco-section/super-esco-section.component';
import { AddressSectionComponent } from './container/main/contact-main/contact-main-main-page/address-section/address-section.component';
import { EscoContactSectionComponent } from './container/main/contact-main/contact-main-main-page/esco-contact-section/esco-contact-section.component';
import { YararlaniciContactSectionComponent } from './container/main/contact-main/contact-main-main-page/yararlanici-contact-section/yararlanici-contact-section.component';
import { ErrorNotFoundComponent } from './error-not-found/error-not-found.component';

const routes: Routes = [
  { path: '', redirectTo: '/Home', pathMatch: 'full' },
  { path: "Home", component: HomeMainComponent },
  { path: "Hedefimiz", component: GoalsMainComponent,
    children: [
    {
      path: 'Farkındalığımız', component: AwarenessSectionComponent,
    },
    {
      path:'Hedeflerimiz', component: VisionSectionComponent,
    },
  ]},
  { path: "Hikayemiz", component: PhasesMainComponent,
    children: [
    {
      path: 'Enerji-Verimliliği-Hikayemiz', component: EnerjiHikayemizSectionComponent,
    },
    {
      path:'Kaynak-Verimliliği-Teması', component: KaynakVerSectionComponent,
    },
    {
      path: 'Enerji-Verimliliği-Mentorluk-Programı', component: EnerjiVerSectionComponent,
    },
    {
      path:'Super-Esco-Yatırım', component: SuperEscoSectionComponent,
    },
  ]},
  { path: "Iletisim", component: ContactMainComponent,
  children: [
    {
      path: 'Adres-Bilgileri', component: AddressSectionComponent,
    },
    {
      path:'Esco-Iletisim', component: EscoContactSectionComponent,
    },
    {
      path: 'Yararlanıcı-Iletisim', component: YararlaniciContactSectionComponent,
    },
  ]},
  { path: "Super-Esco", component: PhasesMainComponent,
    children: [
    {
      path:'Super-Esco-Yatırım', component: SuperEscoSectionComponent,
    },
  ]},
  { path: "**", component: ErrorNotFoundComponent }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
