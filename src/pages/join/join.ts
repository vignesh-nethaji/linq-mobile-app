import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { GroupJoinPage } from '../join/group-join/group-join';
import { InnerJoinPage } from '../join/inner-join/inner-join';
/**
 * Generated class for the Join page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-join',
  templateUrl: 'join.html',
})
export class Join {
operators: Array<{ title: string, component: any, icon: string }>;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
      this.operators = [
      { title: 'Group Join', component:GroupJoinPage , icon: 'flask' },
      { title: 'Inner Join', component:InnerJoinPage , icon: 'flask' },
     
    ];
  }
  pageTapped(item: any) {
    this.navCtrl.push(item);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Join');
  }

}
