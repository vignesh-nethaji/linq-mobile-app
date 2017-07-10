import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AsEnumerablePage } from '../conversion/as-enumerable/as-enumerable';
import { CastPage } from '../conversion/cast/cast';
import { OfTypePage } from '../conversion/of-type/of-type';
import { ToArrayPage } from '../conversion/to-array/to-array';
import { ToDictionaryCondPage } from '../conversion/to-dictionary-cond/to-dictionary-cond';
import { ToDictionarySimplePage } from '../conversion/to-dictionary-simple/to-dictionary-simple';
import { ToListPage } from '../conversion/to-list/to-list';
import { ToLookUpPage } from '../conversion/to-lookup/to-lookup';

/**
 * Generated class for the Conversion page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-conversion',
  templateUrl: 'conversion.html',
})
export class Conversion {
  operators: Array<{ title: string, component: any, icon: string }>;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.operators = [
      { title: 'AsEnumerable', component: AsEnumerablePage, icon: 'flask', },
      { title: 'Cast', component: CastPage, icon: 'flask', },
      { title: 'OfType', component: OfTypePage, icon: 'flask', },
      { title: 'ToArray', component: ToArrayPage, icon: 'flask', },
      { title: 'ToDictionary (Simple)', component: ToDictionarySimplePage, icon: 'flask', },
      { title: 'ToDictionary (Cond)', component: ToDictionaryCondPage, icon: 'flask', },
      { title: 'ToList', component: ToListPage, icon: 'flask', },
      { title: 'ToLookUp', component: ToLookUpPage, icon: 'flask', },
    ];

  }
  pageTapped(item: any) {
    this.navCtrl.push(item);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Conversion');
  }

}
