import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../../../services/language/language.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent implements OnInit {
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
