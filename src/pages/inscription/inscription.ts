import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CommandePage } from '../commande/commande';
import { AlertController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-inscription',
  templateUrl: 'inscription.html'
})
export class InscriptionPage {

  constructor(public navCtrl: NavController, public alertCtrl: AlertController, public storage: Storage) {
    
  }

  insc = {}
  inscForm() {
    this.storage.set('clients', this.insc);

    this.navCtrl.push(CommandePage);
      let alert = this.alertCtrl.create({
        title: 'Inscription validé !',
        subTitle: 'Un mail vous à été envoyé, veuillez suivre les instructions si vous voulez créditer votre carte.<br>  Merci !',
        buttons: ['OK']
      });
      alert.present();
    }

}
