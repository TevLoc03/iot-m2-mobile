import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import {ApiServiceProvider} from '../../providers/api-service/api-service';

@Component({
  selector: 'page-plat',
  templateUrl: 'plat.html',
  providers: [ApiServiceProvider]
})
export class PlatPage {
  public plat: any;

  constructor(public apiService: ApiServiceProvider, public navCtrl: NavController, public alertCtrl: AlertController) {
    this.loadData();
  }

  loadData(){
    this.apiService.load()
    .then(data => {
      this.plat = data;
    });
  }

  ajoutPlat() {
    let alert = this.alertCtrl.create({
      title: 'Plat ajouté',
      subTitle: 'Continuer votre commande',
      buttons: [
        {
          text: 'Oui'
        },
        {
          text: 'Revenir accueil'
        }
      ]
    });
    alert.present();
  }

}