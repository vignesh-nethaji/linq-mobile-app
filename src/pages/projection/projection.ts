import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { SelectAnonymousPage } from '../projection/select-anonymous/select-anonymous';
import { SelectIndexedPage } from '../projection/select-indexed/select-indexed';
import { SelectManyCrossJoinPage } from '../projection/select-many-cross-join/select-many-cross-join';
import { SelectSimplePage } from '../projection/select-simple/select-simple';
/**
 * Generated class for the Projection page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-projection',
  templateUrl: 'projection.html',
})
export class Projection {
  operators: Array<{ title: string, component: any, icon: string }>;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.operators = [
      { title: 'Select (Simple)', component: SelectSimplePage, icon: 'flask' },
      { title: 'Select (Anonymous)', component: SelectAnonymousPage, icon: 'flask' },
      { title: 'Select (Indexed)', component: SelectIndexedPage, icon: 'flask' },
      { title: 'SelectMany (CrossJoin)', component: SelectManyCrossJoinPage, icon: 'flask' },
    ];
  }
  pageTapped(item: any) {
    this.navCtrl.push(item);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Projection');
  }

}
