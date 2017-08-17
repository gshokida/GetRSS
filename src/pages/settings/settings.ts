import { Component } from '@angular/core';
import { IonicPage, ModalController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
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
  public category;
  public categories = Array<any>();

  constructor(public modalCtrl: ModalController, private storage: Storage) {
  }

  ngOnInit() {
    this.categories = [];
    this.storage.get('category').then((val) => {
      this.categories = JSON.parse(val);
    } );
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
  }

  openRSSPage(categoryName: string) {
    let modal = this.modalCtrl.create(RssDataPage, categoryName);
    modal.present();
  }

  saveCategory() {
    this.categories.push({ name : this.category, items : [] });
    this.storage.set('category', JSON.stringify(this.categories));
  }

  deleteCategory(categoryName: string) {
    this.categories = this.categories.filter(c => c.name != categoryName);
    this.storage.set('category', JSON.stringify(this.categories));
  }
}
