import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { Http, Headers, RequestOptions } from '@angular/http';
import {ApiServiceProvider} from '../../providers/api-service/api-service';
import 'rxjs/add/operator/share';

@Component({
  selector: 'page-plat',
  templateUrl: 'plat.html',
  providers: [ApiServiceProvider]
})
export class PlatPage {
  public plats: any[];

  constructor(public http: Http, public apiService: ApiServiceProvider, public navCtrl: NavController, public alertCtrl: AlertController) {

  }
  
  ionViewDidEnter(){
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let options = new RequestOptions({ headers: headers });
    // Utilisation des headers
    
    let seq = this.apiService.get('posts', null, options).share();
    
    seq
      .map(res => res.json())
      .subscribe(res => {
          // Retour JSON/XML de l'API
          this.plats = res;
          console.log(res);
        }, err => {
          console.error('ERROR', err);
        });
    return seq;
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