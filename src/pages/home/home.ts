import { Component } from '@angular/core';
import { ModalController, NavController } from 'ionic-angular';
import { ModalContentPage } from "./modal-content";
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public categories = Array<any>();

  constructor(public modalCtrl: ModalController, private storage: Storage) {

  }

  ngOnInit() {
    this.categories = [];
    this.storage.get('category').then((val) => {
      this.categories = JSON.parse(val);
    } );
  }

  openModal(rssData: string) {
    let modal = this.modalCtrl.create(ModalContentPage, rssData);
    modal.present();
  }
}



