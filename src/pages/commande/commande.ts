import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { Http, Headers, RequestOptions } from '@angular/http';
import {ApiServiceProvider} from '../../providers/api-service/api-service';
import 'rxjs/add/operator/share';
import { InscriptionPage } from '../inscription/inscription';
import { PlatPage } from '../plat/plat';
import { BoissonPage } from '../boisson/boisson';

@Component({
  selector: 'page-commande',
  templateUrl: 'commande.html'
})
export class CommandePage {

  public produits: any[];
  
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
            this.produits = res;
            console.log(res);
          }, err => {
            console.error('ERROR', err);
          });
      return seq;
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
