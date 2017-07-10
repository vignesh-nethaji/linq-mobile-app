import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { DefaultIfEmptyDefaultValuePage } from '../generation/default-if-empty-default-value/default-if-empty-default-value';
import { DefaultIfEmptySimplePage } from '../generation/default-if-empty-simple/default-if-empty-simple';
import { EmptyPage } from '../generation/empty/empty';
import { RangePage } from '../generation/range/range';
import { RepeatPage } from '../generation/repeat/repeat';
/**
 * Generated class for the Generation page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-generation',
  templateUrl: 'generation.html',
})
export class Generation {
  operators: Array<{ title: string, component: any, icon: string }>;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.operators = [
      { title: 'DefaultIfEmpty (Simple)', component: DefaultIfEmptySimplePage, icon: 'flask' },
      { title: 'DefaultIfEmpty (DefaultValue)', component: DefaultIfEmptyDefaultValuePage, icon: 'flask' },
      { title: 'Empty', component: EmptyPage, icon: 'flask' },
      { title: 'Range', component: RangePage, icon: 'flask' },
      { title: 'Repeat', component: RepeatPage, icon: 'flask' },
    ];
  }
  pageTapped(item: any) {
    this.navCtrl.push(item);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Generation');
  }

}
