import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';

import { ViewController } from 'ionic-angular';

@Component({
  templateUrl: 'category.html'
})
export class CategoryPage {

  public category;
  public categories = Array<any>();

  constructor(
    public viewCtrl: ViewController,
    private storage: Storage
  ) {

  }

  ngOnInit() {
    this.categories = [];
    this.storage.get('category').then((val) => {
      this.categories = JSON.parse(val);
    } );
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  saveCategory() {
    let cat = new Array<any>();

    this.storage.get('category').then((res) => {
      if(res != null)
        cat = JSON.parse(res);

      cat.push({ name : this.category, items : [] });

      this.storage.set('category', JSON.stringify(cat));

      this.categories = cat;

      this.category = "";
    });
  }

  deleteCategory(categoryName: string) {
    let cat = new Array<any>();

    this.storage.get('category').then((res) => {
      if(res != null)
        cat = JSON.parse(res);

      cat = cat.filter(c => c.name != categoryName);

      this.storage.set('category', JSON.stringify(cat));

      this.categories = cat;
    });
  }
}
