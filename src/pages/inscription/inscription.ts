import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CommandePage } from '../commande/commande';
import { AlertController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { Http } from '@angular/http';
import {ApiServiceProvider} from '../../providers/api-service/api-service';
import 'rxjs/add/operator/share';

@Component({
  selector: 'page-inscription',
  templateUrl: 'inscription.html',
  providers: [ApiServiceProvider]
})
export class InscriptionPage {

  constructor(public http: Http, public apiService: ApiServiceProvider, public navCtrl: NavController, public alertCtrl: AlertController, public storage: Storage) {
    
  }

  insc = {};

  inscForm() {
    this.storage.set('clients', this.insc);

    let data = JSON.stringify(this.insc);

    console.log('preview', data);

    this.apiService.post('user', data, null)
    .subscribe(data => {
      console.log('ok', data);

      this.navCtrl.push(CommandePage);
        let alert = this.alertCtrl.create({
          title: 'Inscription validé !',
          subTitle: 'Un mail vous à été envoyé, veuillez suivre les instructions si vous voulez créditer votre carte.<br>  Merci !',
          buttons: ['OK']
        });
        alert.present();

    }, error => {
      console.error('err', error);

      let alert = this.alertCtrl.create({
        title: 'Erreur',
        subTitle: 'Un problème est survenue, veuillez réessayer s\'il vous plat',
        buttons: ['OK']
      });

      alert.present();
    });

    }

}
