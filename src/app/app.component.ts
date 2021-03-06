import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';

import { CommandePage } from '../pages/commande/commande';
import { InscriptionPage } from '../pages/inscription/inscription';
import { PlatPage } from '../pages/plat/plat';
import { BoissonPage } from '../pages/boisson/boisson';
import { PaiementPage } from '../pages/paiement/paiement';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Accueil', component: HomePage },

      { title: 'Commande', component: CommandePage },
      { title: 'Inscription', component: InscriptionPage },
      { title: 'Plat', component: PlatPage },
      { title: 'Boisson', component: BoissonPage },
      { title: 'Paiement', component: PaiementPage },
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
