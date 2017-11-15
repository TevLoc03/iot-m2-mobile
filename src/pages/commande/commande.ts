import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { InscriptionPage } from '../inscription/inscription';
import { PlatPage } from '../plat/plat';
import { BoissonPage } from '../boisson/boisson';

@Component({
  selector: 'page-commande',
  templateUrl: 'commande.html'
})
export class CommandePage {

  constructor(public navCtrl: NavController) {

  }

  inscription() {
    this.navCtrl.push(InscriptionPage);
  }
  plat() {
    this.navCtrl.push(PlatPage);
  }
  boisson() {
    this.navCtrl.push(BoissonPage);
  }
}
