import { Component, OnInit } from '@angular/core';
import { map, filter } from 'rxjs/operators';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router, NavigationEnd } from '@angular/router';
import { Observable } from 'rxjs';
import { LanguageService } from './services/language/language.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'List',
      url: '/list',
      icon: 'list'
    }
  ];

  shouldDisableMenu$: Observable<boolean>;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private readonly router: Router,
    private languageService: LanguageService

  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      this.languageService.setInitialAppLanguage();

    });
  }

  ngOnInit() {
    this.shouldDisableMenu$ = this.disableMenuFor(['', '/auth/login'])
  }

  disableMenuFor(urls: string[]) {
    return this.router.events.pipe(
      map((event: NavigationEnd) => event.urlAfterRedirects),
      filter(url => !!url),
      map(url => urls.includes(url))
    );
  }
}
