import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorksRoutingModule } from './works-routing.module';
import { WorksPageComponent } from './pages/works-page/works-page.component';
import { SharedModule } from '@shared//shared.module';


@NgModule({
  declarations: [
    WorksPageComponent
  ],
  imports: [
    CommonModule,
    WorksRoutingModule,
    SharedModule
  ]
})
export class WorksModule { }
