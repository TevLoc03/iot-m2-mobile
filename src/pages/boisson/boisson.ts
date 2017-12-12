import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { Http, Headers, RequestOptions } from '@angular/http';
import {ApiServiceProvider} from '../../providers/api-service/api-service';
import 'rxjs/add/operator/share';

@Component({
  selector: 'page-boisson',
  templateUrl: 'boisson.html',
  providers: [ApiServiceProvider]
})
export class BoissonPage {

  public boissons: any[];
  
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
            this.boissons = res;
            console.log(res);
          }, err => {
            console.error('ERROR', err);
          });
      return seq;
    }
  
    ajoutBoisson() {
      let alert = this.alertCtrl.create({
        title: 'Boisson ajouté',
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
