import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  selected = '';

  constructor(private translate: TranslateService) { }

  setInitialAppLanguage() {
    // const language = this.translate.getBrowserLang();
    this.translate.setDefaultLang('en');
  }

  setLanguage(lng) {
    this.translate.use(lng);
    this.selected = lng;
  }
}
