import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { DistinctPage } from '../set/distinct/distinct';
import { ExceptPage } from '../set/except/except';
import { IntersectPage } from '../set/intersect/intersect';
import { UnionPage } from '../set/union/union';

/**
 * Generated class for the Set page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-set',
  templateUrl: 'set.html',
})
export class SetPage {
operators: Array<{ title: string, component: any, icon: string }>;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.operators = [
      { title: 'Distinct', component:DistinctPage, icon: 'flask' },
      { title: 'Except', component:ExceptPage, icon: 'flask' },
      { title: 'Intersect', component:IntersectPage, icon: 'flask' },
      { title: 'Union', component:UnionPage, icon: 'flask' },
          
    ];
  }
  pageTapped(item: any) {
    this.navCtrl.push(item);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Set');
  }

}
