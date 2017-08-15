import { Component } from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';

@Component({
  templateUrl: 'modal-content.html'
})
export class ModalContentPage {
  character;

  constructor(
    public params: NavParams,
    public viewCtrl: ViewController
  ) {
    this.character = this.params.get('data');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}
