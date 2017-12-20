import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { Http } from '@angular/http';
import { AlertController } from 'ionic-angular';
import {ApiServiceProvider} from '../../providers/api-service/api-service';
import 'rxjs/add/operator/share';
import { LoadingController } from 'ionic-angular';

@Component({
    selector: 'page-paiement',
    templateUrl: 'paiement.html',
    providers: [ApiServiceProvider]
  })
  export class PaiementPage {

    public panier: any[];
    public uid: any;

    constructor(public loadingCtrl: LoadingController, public apiService: ApiServiceProvider, public alertCtrl: AlertController, public navCtrl: NavController, public storage: Storage) {
      
    }
  
    ionViewDidEnter(){
      
      this.storage.get('panier').then((val) => {
        console.log('panier', val);
        this.panier = val;
      });
      
    } 

    payer() {

      let seq = this.apiService.getArduino('read/o', null).share();
      
      seq
        .map(res => res.json())
        .subscribe(res => {
            // Retour JSON/XML de l'API
            this.uid = res;
            console.log(res);
          }, err => {
            console.error('ERROR', err);
            this.uid = err;
          });

      /*let data = JSON.stringify(this.panier);
      
          console.log('preview', data);
      
          this.apiService.post('4/order', data, null)
          .subscribe(data => {
            console.log('ok', data);
      
          }, error => {
            console.error('err', error);

          });

      let loader = this.loadingCtrl.create({
        content: "Passer votre carte sur la borne, s'il vous plait...",
        duration: 3000
      });
      loader.present();*/

      //this.storage.remove('panier');
      this.storage.remove('clients');
    }

  }
  