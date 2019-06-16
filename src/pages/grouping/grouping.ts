import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { GroupByPage } from '../grouping/group-by/group-by';
/**
 * Generated class for the Grouping page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-grouping',
  templateUrl: 'grouping.html',
})
export class Grouping {
operators: Array<{ title: string, component: any, icon: string }>;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
      this.operators = [
      { title: 'Group By', component: GroupByPage, icon: 'flask' },
      
    ];
  }
  pageTapped(item: any) {
    this.navCtrl.push(item);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Grouping');
  }

}
