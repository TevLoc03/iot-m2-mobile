import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { CommandePage } from '../pages/commande/commande';
import { InscriptionPage } from '../pages/inscription/inscription';
import { PlatPage } from '../pages/plat/plat';
import { BoissonPage } from '../pages/boisson/boisson';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ApiServiceProvider } from '../providers/api-service/api-service';
import { HttpModule } from '@angular/http'; 

@NgModule({
  declarations: [
    MyApp,
    HomePage,

    CommandePage,
    InscriptionPage,
    PlatPage,
    BoissonPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,

    CommandePage,
    InscriptionPage,
    PlatPage,
    BoissonPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ApiServiceProvider
  ]
})
export class AppModule {}
