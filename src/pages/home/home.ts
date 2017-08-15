import { Component } from '@angular/core';
import { ModalController, NavController } from 'ionic-angular';
import { ModalContentPage } from "./modal-content";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  items = [
    {
      title: 'URL 1 Prueba',
      url: 'Sneaky little hobbitses!',
      items: [
        { title: 'Race', note: 'Hobbit' },
        { title: 'Culture', note: 'River Folk' },
        { title: 'Alter Ego', note: 'Smeagol' }
      ]
    },
    {
      title: 'RSS Sarasa',
      url: 'Go back, Sam! I\'m going to Mordor alone!',
      items: [
        { title: 'Race', note: 'Hobbit' },
        { title: 'Culture', note: 'Shire Folk' },
        { title: 'Weapon', note: 'Sting' }
      ]
    }
  ];

  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {

  }

  openModal(item: string) {
    console.log("Selected Item", item);
    let modal = this.modalCtrl.create(ModalContentPage, item);
    modal.present();
  }
}



