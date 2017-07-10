import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { OrderByDatesPage } from '../ordering/order-by-dates/order-by-dates';
import { OrderByDescendingPage } from '../ordering/order-by-descending/order-by-descending';
import { OrderByNumbersPage } from '../ordering/order-by-numbers/order-by-numbers';
import { OrderByObjectsPage } from '../ordering/order-by-objects/order-by-objects';
import { ReversePage } from '../ordering/reverse/reverse';
import { ThenByPage } from '../ordering/then-by/then-by';
import { ThenByDescendingPage } from '../ordering/then-by-descending/then-by-descending';
/**
 * Generated class for the Ordering page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-ordering',
  templateUrl: 'ordering.html',
})
export class Ordering {
  operators: Array<{ title: string, component: any, icon: string }>;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.operators = [
      { title: 'OrderBy (Numbers)', component: OrderByNumbersPage, icon: 'flask' },
      { title: 'OrderBy (Dates)', component: OrderByDatesPage, icon: 'flask' },
      { title: 'OrderBy (Objects)', component: OrderByObjectsPage, icon: 'flask' },
      { title: 'OrderByDescending', component: OrderByDescendingPage, icon: 'flask' },
      { title: 'Reverse', component: ReversePage, icon: 'flask' },
      { title: 'ThenBy', component: ThenByPage, icon: 'flask' },
      { title: 'ThenByDescending', component: ThenByDescendingPage, icon: 'flask' },
    ];
  }
  pageTapped(item: any) {
    this.navCtrl.push(item);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Ordering');
  }

}
