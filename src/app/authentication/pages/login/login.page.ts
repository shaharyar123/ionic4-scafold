import { Component, OnInit } from '@angular/core';
import { LanguageService } from 'src/app/services/language/language.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  isModifiedLng = false;
  constructor(private languageService: LanguageService) { }

  ngOnInit() {
  }
  processForm() {
    console.log('submitted')
  }

  stateChange() {
    this.languageService.setLanguage(this.isModifiedLng ? 'fr' : 'en');

  }

}
