import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { Http } from '@angular/http';
import {ApiServiceProvider} from '../../providers/api-service/api-service';
import 'rxjs/add/operator/share';
import { Storage } from '@ionic/storage';
import { CommandePage } from '../commande/commande';

@Component({
  selector: 'page-boisson',
  templateUrl: 'boisson.html',
  providers: [ApiServiceProvider]
})
export class BoissonPage {

  public boissons: any[];
  produits: any[];

  constructor(public http: Http, public apiService: ApiServiceProvider, public navCtrl: NavController, public alertCtrl: AlertController, public storage: Storage) {

  }
  
  ionViewDidEnter(){
    
    let seq = this.apiService.get('4/products', null, null).share();
    
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

  ajoutBoisson(title, price, img, id) {

    this.storage.get('panier').then((data) => {
      this.produits = data;
      console.log(data);
    });

    this.storage.get('panier').then((data) => {
      if(data != null){
        data.push({
          id: id,
          titre: title,
          prix: price,
          image: img
        });
        this.storage.set('panier', data);
      }
      else {
        let array = [];
        array.push({
          id: id,
          titre: title,
          prix: price,
          image: img
        });
        this.storage.set('panier', array);
      }
    });

    let alert = this.alertCtrl.create({
      title: 'Boisson ajouté',
      subTitle: 'Continuer votre commande',
      buttons: [
        {
          text: 'Oui'
        },
        {
          text: 'Revenir accueil',
        handler: () => {
          this.navCtrl.push(CommandePage);
          }
        }
      ]
    });
    alert.present();
  }

}
