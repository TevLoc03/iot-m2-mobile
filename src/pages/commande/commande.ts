import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
//import { Http, Headers, RequestOptions } from '@angular/http';
import {ApiServiceProvider} from '../../providers/api-service/api-service';
import 'rxjs/add/operator/share';
import { InscriptionPage } from '../inscription/inscription';
import { PlatPage } from '../plat/plat';
import { BoissonPage } from '../boisson/boisson';
import { PaiementPage } from '../paiement/paiement';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-commande',
  templateUrl: 'commande.html'
})
export class CommandePage {

  public panier: any[];
  public clients: any[];
  
    constructor( public apiService: ApiServiceProvider, public navCtrl: NavController, public alertCtrl: AlertController, public storage: Storage) {
  
    }
    
    ionViewDidEnter(){

      this.storage.get('clients').then((val) => {
        console.log('clients', val);
        this.clients = val;
      });

      this.storage.get('panier').then((val) => {
        console.log('panier', val);
        this.panier = val;
      });

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
  commander() {
    this.navCtrl.push(PaiementPage);
  }
}
