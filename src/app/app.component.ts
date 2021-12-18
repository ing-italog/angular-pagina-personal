import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

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
}
