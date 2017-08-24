import { Component } from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';
import {RssProvider} from "../../providers/rss/rss";

@Component({
  templateUrl: 'modal-content.html'
})
export class ModalContentPage {
  protected rss;

  constructor(
    public params: NavParams,
    public viewCtrl: ViewController,
    protected rssProvider: RssProvider
  ) {
    console.log(this.params);
    this.rss = this.params.get('rssData');
    console.log(this.rss);
  }

  ngOnInit() {
    this.rssProvider.load(this.rss.url).subscribe((val) => {
      console.log(val);
    });
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}
