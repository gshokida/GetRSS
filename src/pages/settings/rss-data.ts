import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import { ViewController, NavParams } from 'ionic-angular';

@Component({
  templateUrl: 'rss-data.html'
})
export class RssDataPage {
  protected categories = Array<any>();
  public rssItems = Array<any>();
  protected categoryName;
  protected category;
  public title;
  public url;

  constructor(
    public viewCtrl: ViewController,
    private storage: Storage,
    public params: NavParams
  ) {
    this.categoryName = this.params.get('category');
  }

  ngOnInit() {
    this.categories = [];
    this.storage.get('category').then((val) => {
      this.categories = JSON.parse(val);

      this.category = this.categories.filter(c => c.name == this.categoryName);

      if (this.category != null && this.category.length > 0){
        this.rssItems = this.category[0].items;
      }
    });
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  saveRss() {
    let item = {title : this.title, url : this.url}
    this.category[0].items.push(item);
    this.storage.set('category', JSON.stringify(this.categories));

    this.title = "";
    this.url = "";
  }

  deleteRss(title: string) {
    this.category[0].items = this.category[0].items.filter(c => c.title != title);
    this.storage.set('category', JSON.stringify(this.categories));
    this.rssItems = this.category[0].items;
  }
}
