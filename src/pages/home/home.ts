import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CommandePage } from '../commande/commande';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
    
  }

  go() {
    this.navCtrl.push(CommandePage);
  }

}
