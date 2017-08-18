import { Component } from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';

@Component({
  templateUrl: 'modal-content.html'
})
export class ModalContentPage {
  protected rss;

  constructor(
    public params: NavParams,
    public viewCtrl: ViewController
  ) {
    this.rss = this.params.get('rssData');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}
