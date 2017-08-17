import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { CategoryPage } from "./category";
import { RssDataPage } from "./rss-data";

/**
 * Generated class for the SettingsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
  }

  openCategoryPage() {
    let modal = this.modalCtrl.create(CategoryPage);
    modal.present();
  }

  openRSSPage() {
    let modal = this.modalCtrl.create(RssDataPage);
    modal.present();
  }
}
