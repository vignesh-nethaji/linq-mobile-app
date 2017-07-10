import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ConcatNumbersPage } from '../other/concat-numbers/concat-numbers';
import { ConcatStringsPage } from '../other/concat-strings/concat-strings';
import { SequenceEqualPage } from '../other/sequence-equal/sequence-equal';
import { ZipPage } from '../other/zip/zip';
/**
 * Generated class for the Other page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-other',
  templateUrl: 'other.html',
})
export class Other {
operators: Array<{ title: string, component: any, icon: string }>;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
     this.operators = [
      { title: 'Concat (Numbers)', component:ConcatNumbersPage , icon: 'flask' },
      { title: 'Concat (Strings)', component:ConcatStringsPage , icon: 'flask' },
      { title: 'SequenceEqual', component:SequenceEqualPage , icon: 'flask' },
      { title: 'Zip', component:ZipPage , icon: 'flask' },          
    ];
  }
  pageTapped(item: any) {
    this.navCtrl.push(item);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Other');
  }

}
