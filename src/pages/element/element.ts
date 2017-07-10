import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ElementAtPage } from '../element/element-at/element-at';
import { ElementAtOrDefaultPage } from '../element/element-at-or-default/element-at-or-default';
import { FirstCondPage } from '../element/first-cond/first-cond';
import { FirstOrDefaultPage } from '../element/first-or-default/first-or-default';
import { FirstSimplePage } from '../element/first-simple/first-simple';
import { LastPage } from '../element/last/last';
import { LastOrDefaultCondPage } from '../element/last-or-default-cond/last-or-default-cond';
import { LastOrDefaultSimplePage } from '../element/last-or-default-simple/last-or-default-simple';
import { SinglePage } from '../element/single/single';
import { SingleOrDefaultPage } from '../element/single-or-default/single-or-default';

/**
 * Generated class for the Element page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-element',
  templateUrl: 'element.html',
})
export class ElementPage {
  operators: Array<{ title: string, component: any, icon: string }>;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.operators = [
      { title: 'ElementAt', component: ElementAtPage, icon: 'flask' },
      { title: 'ElementAtOrDefault', component: ElementAtOrDefaultPage, icon: 'flask' },
      { title: 'First (Simple)', component: FirstSimplePage, icon: 'flask' },
      { title: 'First (Cond)', component: FirstCondPage, icon: 'flask' },
      { title: 'FirstOrDefault', component: FirstOrDefaultPage, icon: 'flask' },      
      { title: 'Last', component: LastPage, icon: 'flask' },
      { title: 'LastOrDefault (Simple)', component: LastOrDefaultSimplePage, icon: 'flask' },
      { title: 'LastOrDefault (Cond)', component: LastOrDefaultCondPage, icon: 'flask' },     
      { title: 'Single', component: SinglePage, icon: 'flask' },
      { title: 'SingleOrDefault', component: SingleOrDefaultPage, icon: 'flask' },
    ];
  }
  pageTapped(item: any) {
    this.navCtrl.push(item);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Element');
  }

}
