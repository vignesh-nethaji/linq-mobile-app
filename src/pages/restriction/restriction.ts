import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { WhereIndexedPage } from '../restriction/where-indexed/where-indexed';
import { WhereNumbersPage } from '../restriction/where-numbers/where-numbers';
import { WhereObjectsPage } from '../restriction/where-objects/where-objects';

/**
 * Generated class for the Restriction page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-restriction',
  templateUrl: 'restriction.html',
})
export class Restriction {
  operators: Array<{ title: string, component: any, icon: string }>;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.operators = [
      { title: 'Where (Numbers)', component: WhereNumbersPage, icon: 'flask' },
      { title: 'Where (Objects)', component: WhereObjectsPage, icon: 'flask' },
      { title: 'Where (Indexed)', component: WhereIndexedPage, icon: 'flask' },
      

    ];
  }
  pageTapped(item: any) {
    this.navCtrl.push(item);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Restriction');
  }

}
