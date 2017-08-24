import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';

/*
  Generated class for the RssProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class RssProvider {

  constructor(public http: Http) {
    console.log('Hello RssProvider Provider');
  }

  load(url: string) {
    return Observable.create(s => {
      this.http.get( "https://query.yahooapis.com/v1/public/yql?q=select * from rss where url =" + url)
        .map(res => res.json()) /* map res obj to json obj */
        .subscribe(data => {
          console.log(data);
          var items = data.query.results.item;
          items.forEach(i=>s.next(i));
          s.complete();
        });
    });
  }
}
