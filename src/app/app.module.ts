import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { CommandePage } from '../pages/commande/commande';
import { InscriptionPage } from '../pages/inscription/inscription';
import { PlatPage } from '../pages/plat/plat';
import { BoissonPage } from '../pages/boisson/boisson';
import { PaiementPage } from '../pages/paiement/paiement';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ApiServiceProvider } from '../providers/api-service/api-service';
import { HttpModule } from '@angular/http'; 
import { IonicStorageModule } from '@ionic/storage';

@NgModule({
  declarations: [
    MyApp,
    HomePage,

    CommandePage,
    InscriptionPage,
    PlatPage,
    BoissonPage,
    PaiementPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,

    CommandePage,
    InscriptionPage,
    PlatPage,
    BoissonPage,
    PaiementPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ApiServiceProvider
  ]
})
export class AppModule {}
