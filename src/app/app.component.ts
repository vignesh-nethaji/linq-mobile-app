import { Component, ViewChild } from '@angular/core';
import { Platform, MenuController, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { Introduction } from '../pages/introduction/introduction';
import { Aggregation } from '../pages/aggregation/aggregation';
import { Conversion } from '../pages/conversion/conversion';
import { ElementPage } from '../pages/element/element';
import { Generation } from '../pages/generation/generation';
import { Grouping } from '../pages/grouping/grouping';
import { Join } from '../pages/join/join';
import { Ordering } from '../pages/ordering/ordering';
import { Other } from '../pages/other/other';
import { Partitioning } from '../pages/partitioning/partitioning';
import { Projection } from '../pages/projection/projection';
import { Quantifiers } from '../pages/quantifiers/quantifiers';
import { Restriction } from '../pages/restriction/restriction';
import { SetPage } from '../pages/set/set';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any = Introduction;
  @ViewChild(Nav) nav: Nav;
  pages: Array<{ title: string, component: any, icon: string,color:string }>;
  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, public menu: MenuController) {


    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      //setTimeout(function(){
        splashScreen.hide();
      //},10000);
      
    });

    this.pages = [
      { title: 'Introduction', component: Introduction, icon: 'albums',color:'primary' },
      { title: 'Aggregation', component: Aggregation, icon: 'wifi', color: 'app-red-med' },
      { title: 'Conversion', component: Conversion, icon: 'football', color: 'app-pink' },
      { title: 'Element', component: ElementPage, icon: 'basketball', color: 'app-purple' },
      { title: 'Generation', component: Generation, icon: 'paper-plane', color: 'app-purple-deep' },
      { title: 'Grouping', component: Grouping, icon: 'body', color: 'app-purple-light' },
      { title: 'Join', component: Join, icon: 'hammer', color: 'app-green-light' },
      { title: 'Ordering', component: Ordering, icon: 'american-football', color: 'app-indigo' },
      { title: 'Other', component: Other, icon: 'boat', color: 'app-purple-mild' },
      { title: 'Partitioning', component: Partitioning, icon: 'aperture', color: 'app-orange' },
      { title: 'Projection', component: Projection, icon: 'build', color: 'app-cyan' },
      { title: 'Quantifiers', component: Quantifiers, icon: 'basket', color: 'app-teal' },
      { title: 'Restriction', component: Restriction, icon: 'body', color: 'app-teal-light' },
      { title: 'Set', component: SetPage, icon: 'book', color: 'app-grey' },
    ];
    this.menu.enable(false);
  }
  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    //this.menu.swipeEnable(false);
    // navigate to the new page if it is not the current page
    this.nav.setRoot(page.component);
  }
}

