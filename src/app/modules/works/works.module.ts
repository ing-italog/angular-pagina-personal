import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorksRoutingModule } from './works-routing.module';
import { WorksPageComponent } from './pages/works-page/works-page.component';
import { SharedModule } from '@shared//shared.module';
//Translate
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

//Translate function
export function HttpLoaderFactory(http: HttpClient){
  return new TranslateHttpLoader(http, './assets/i18n/','.json')
}


@NgModule({
  declarations: [
    WorksPageComponent
  ],
  imports: [
    CommonModule,
    WorksRoutingModule,
    SharedModule,

    //Translate function
    HttpClientModule,
    TranslateModule.forRoot({
      loader:{
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ]
})
export class WorksModule { }
