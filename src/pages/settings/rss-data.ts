import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import { ViewController } from 'ionic-angular';

@Component({
  templateUrl: 'rss-data.html'
})
export class RssDataPage {
  public categories = Array<any>();

  public category;
  public title;
  public url;

  constructor(
    public viewCtrl: ViewController,
    private storage: Storage
  ) {

  }

  ngOnInit() {
    this.categories = [];
    this.storage.get('category').then((val) => {
      console.log(val);
      this.categories = JSON.parse(val);
    } );
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  saveCategory() {
    let cat = new Array<any>();
    let c;

    this.storage.get('category').then((res) => {
      if(res != null)
        cat = JSON.parse(res);

      c = cat.filter(c => c.name == this.category);

      if (c != null)
        c[0].push();

      this.storage.set('category', JSON.stringify(cat));

      this.categories = cat;

      this.category = "";
    });
  }
}
