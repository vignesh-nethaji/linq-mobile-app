import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AllPage } from '../quantifiers/all/all';
import { AnyPage } from '../quantifiers/any/any';
import { ContainsPage } from '../quantifiers/contains/contains';

/**
 * Generated class for the Quantifiers page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-quantifiers',
  templateUrl: 'quantifiers.html',
})
export class Quantifiers {
  operators: Array<{ title: string, component: any, icon: string }>;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.operators = [
      { title: 'All', component: AllPage, icon: 'flask' },
      { title: 'Any', component: AnyPage, icon: 'flask' },
      { title: 'Contains', component: ContainsPage, icon: 'flask' },

    ];
  }
  pageTapped(item: any) {
    this.navCtrl.push(item);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Quantifiers');
  }

}
