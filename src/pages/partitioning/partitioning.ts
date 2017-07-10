import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


import { SkipPage } from '../partitioning/skip/skip';
import { SkipWhilePage } from '../partitioning/skip-while/skip-while';
import { TakePage } from '../partitioning/take/take';
import { TakeWhilePage } from '../partitioning/take-while/take-while';
/**
 * Generated class for the Partitioning page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-partitioning',
  templateUrl: 'partitioning.html',
})
export class Partitioning {
operators: Array<{ title: string, component: any, icon: string }>;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
     this.operators = [
      { title: 'Skip', component:SkipPage , icon: 'flask' },
      { title: 'SkipWhile', component:SkipWhilePage , icon: 'flask' },
      { title: 'Take', component:TakePage , icon: 'flask' },
      { title: 'TakeWhile', component:TakeWhilePage , icon: 'flask' },
    ];
  }
  pageTapped(item: any) {
    this.navCtrl.push(item);
  } 

  ionViewDidLoad() {
    console.log('ionViewDidLoad Partitioning');
  }

}
