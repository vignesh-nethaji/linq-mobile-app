import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AggregateSimplePage } from '../aggregation/aggregate-simple/aggregate-simple';

import { AggregatSeedPage } from '../aggregation/aggregate-seed/aggregate-seed';
import { AveragePage } from '../aggregation/average/average';
import { CountPage } from '../aggregation/count/count';
import { LongCountPage } from '../aggregation/long-count/long-count';
import { MaxPage } from '../aggregation/max/max';
import { MinPage } from '../aggregation/min/min';
import { SumPage } from '../aggregation/sum/sum';
/**
 * Generated class for the Aggregation page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-aggregation',
  templateUrl: 'aggregation.html',
})
export class Aggregation {
  operators: Array<{ title: string, component: any, icon: string }>;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.operators = [
      { title: 'Aggregate (Simple)', component: AggregateSimplePage, icon: 'flask' },
      { title: 'Aggregate (Seed)', component: AggregatSeedPage, icon: 'flask' },
      { title: 'Average', component: AveragePage, icon: 'flask' },
      { title: 'Count', component: CountPage, icon: 'flask' },
      { title: 'LongCount', component: LongCountPage, icon: 'flask' },
      { title: 'Max', component:MaxPage , icon: 'flask' },
      { title: 'Min', component:MinPage , icon: 'flask' },
      { title: 'Sum', component: SumPage, icon: 'flask' },
    ];
  }
  pageTapped(item: any) {
    this.navCtrl.push(item);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad Aggregation');
  }

}
