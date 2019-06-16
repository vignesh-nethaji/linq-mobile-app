import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,Nav } from 'ionic-angular';


import { Aggregation } from '../aggregation/aggregation';
import { Conversion } from '../conversion/conversion';
import { ElementPage } from '../element/element';
import { Generation } from '../generation/generation';
import { Grouping } from '../grouping/grouping';
import { Join } from '../join/join';
import { Ordering } from '../ordering/ordering';
import { Other } from '../other/other';
import { Partitioning } from '../partitioning/partitioning';
import { Projection } from '../projection/projection';
import { Quantifiers } from '../quantifiers/quantifiers';
import { Restriction } from '../restriction/restriction';
import { SetPage } from '../set/set';
/**
 * Generated class for the Introduction page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-introduction',
  templateUrl: 'introduction.html',
  //templateUrl: (function(){ return 'introduction.html'}()),
})
export class Introduction {

  operators: Array<{ title: string, component: any, icon: string, color: string }>;
  constructor(public navCtrl: NavController, public navParams: NavParams,public nav:Nav) {
    
    this.operators = [
      { title: 'Aggregation', component: Aggregation, icon: 'linq-aggregation', color: 'app-red-med' },
      { title: 'Conversion', component: Conversion, icon: 'linq-conversion', color: 'app-pink' },
      { title: 'Element', component: ElementPage, icon: 'linq-element', color: 'app-purple' },
      { title: 'Generation', component: Generation, icon: 'linq-generation', color: 'app-purple-deep' },
      { title: 'Grouping', component: Grouping, icon: 'linq-group', color: 'app-purple-light' },
      { title: 'Join', component: Join, icon: 'linq-join', color: 'app-green-light' },
      { title: 'Ordering', component: Ordering, icon: 'linq-order', color: 'app-indigo' },
      { title: 'Other', component: Other, icon: 'linq-other', color: 'app-purple-mild' },
      { title: 'Partitioning', component: Partitioning, icon: 'linq-partition', color: 'app-orange' },
      { title: 'Projection', component: Projection, icon: 'linq-projection', color: 'app-cyan' },
      { title: 'Quantifiers', component: Quantifiers, icon: 'linq-quantifiers', color: 'app-teal' },
      { title: 'Restriction', component: Restriction, icon: 'linq-restriction', color: 'app-teal-light' },
      { title: 'Set', component: SetPage, icon: 'linq-set', color: 'app-grey' },
    ];
  }
 openPage(page) {
  
    this.nav.setRoot(page.component);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad Introduction');
  }

}
