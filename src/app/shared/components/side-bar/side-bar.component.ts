import { LEADING_TRIVIA_CHARS } from '@angular/compiler/src/render3/view/template';
import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit{

  mainMenu: Array<any> = []
  imgLogoComputer: any = './assets/images/logo.png'
  imgLogoMovil: any = './assets/images/logoMovil.png'  

  public lang: string = 'es'
  
  constructor(public translate: TranslateService) {

    this.translate.addLangs(['es', 'en']);
    this.translate.setDefaultLang('en');

  }
  useLanguage(languaje: string) {

    this.translate.use(languaje = this.lang);

    if (this.lang == 'es') {
      this.lang = 'en'
    } else {
      this.lang = 'es'
    }
  }

  ngOnInit(): void {

  }
}
