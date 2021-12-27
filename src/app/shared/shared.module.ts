import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { RouterModule } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { FooterComponent } from './components/footer/footer.component';


//Translate function
export function HttpLoaderFactory(http: HttpClient){
  return new TranslateHttpLoader(http, './assets/i18n/','.json')
}

@NgModule({
  declarations: [
    SideBarComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule,

     //Translate function
     HttpClientModule,
     TranslateModule.forRoot({
       loader:{
         provide: TranslateLoader,
         useFactory: HttpLoaderFactory,
         deps: [HttpClient]
       }
     })
    
  ],
  exports:[
    SideBarComponent,
    FooterComponent
  ]
    
  
})
export class SharedModule { }
