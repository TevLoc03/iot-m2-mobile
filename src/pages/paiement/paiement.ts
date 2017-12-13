import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@Component({
    selector: 'page-paiement',
    templateUrl: 'paiement.html'
  })
  export class PaiementPage {
  
    constructor(public navCtrl: NavController, public storage: Storage) {
      this.storage.remove('panier');
      this.storage.remove('clients');
    }
  
  
  }
  