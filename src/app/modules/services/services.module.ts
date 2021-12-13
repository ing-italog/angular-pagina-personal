import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServicesRoutingModule } from './services-routing.module';
import { ServicePageComponent } from './pages/service-page/service-page.component';
import { SharedModule } from '@shared//shared.module';


@NgModule({
  declarations: [
    ServicePageComponent
  ],
  imports: [
    CommonModule,
    ServicesRoutingModule,
    SharedModule
  ]
})
export class ServicesModule { }
