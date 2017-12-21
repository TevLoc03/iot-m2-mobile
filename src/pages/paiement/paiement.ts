import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { AlertController } from 'ionic-angular';
import {ApiServiceProvider} from '../../providers/api-service/api-service';
import 'rxjs/add/operator/share';
import { Http } from '@angular/http';
import { LoadingController } from 'ionic-angular';
import { CommandePage } from '../commande/commande';

@Component({
    selector: 'page-paiement',
    templateUrl: 'paiement.html',
    providers: [ApiServiceProvider]
  })
  export class PaiementPage {

    public panier: any[];
    public uid: any;
    public totalPanier: 0;

    constructor(public loadingCtrl: LoadingController, public apiService: ApiServiceProvider, public alertCtrl: AlertController, public navCtrl: NavController, public storage: Storage) {
      
    }
  
    ionViewDidEnter(){
      
      this.storage.get('panier').then((val) => {
        console.log('panier', val, this.totalPanier);
        this.panier = val;
        this.totalPanier = 0;

        this.panier.forEach(element => {
          this.totalPanier = this.totalPanier+element.prix;
        });

      });
    } 

    payer() {
      var commande = [];

      let loader = this.loadingCtrl.create({
        content: "Passer votre carte sur la borne, s'il vous plait...",
      });
      loader.present();

      let seq = this.apiService.getArduino('read/o').share();
      seq
        .map(res => res.json())
        .subscribe(res => {

            this.uid = res.uid;
            console.log('uid', res);

            commande.push({
                uid: this.uid,
                products: this.panier
            });

            let data = JSON.stringify(commande);
            console.log('visualisation ', data);

            this.apiService.post('4/order', data, null)
            .subscribe(data => {
              console.log('commande ok', data);

              let seq = this.apiService.getArduino('paiment/true').share();
              seq
                .map(res => res.json())
                .subscribe(res => {

                  loader.dismiss();
                  this.navCtrl.push(CommandePage);
                  let alert = this.alertCtrl.create({
                    title: 'Paiement accepté',
                    subTitle: 'Merci pour votre commande !',
                    buttons: [{text: 'Ok'}]
                    });
                  alert.present();
                  this.storage.remove('panier');

                }, err => {
                  console.error('err', err);

                  //a modifié erreur sans raison apparante
                  loader.dismiss();
                  this.navCtrl.push(CommandePage);
                  let alert = this.alertCtrl.create({
                    title: 'Paiement accepté',
                    subTitle: 'Merci pour votre commande !',
                    buttons: [{text: 'Ok'}]
                  });
                  alert.present();
                  this.storage.remove('panier');

                });

            }, error => {
              console.error('erreur commande', error);

              let seq = this.apiService.getArduino('paiment/false').share();
              seq
                .map(res => res.json())
                .subscribe(res => {

                  loader.dismiss();
                  let alert = this.alertCtrl.create({
                    title: 'Paiement refusé',
                    buttons: [ {text: 'Reessayez'}]
                  });
                  alert.present();

                }, err => {
                  console.error('err', err);

                });

            });

          }, err => {
            console.error('lecture arduino erreur', JSON.stringify(err));

            loader.dismiss();
            let alert = this.alertCtrl.create({
              title: 'Problème d\'accès à l\’arduino',
              buttons: [ {text: 'Reessayez'}]
            });
            alert.present();

          });

    }

  }
  