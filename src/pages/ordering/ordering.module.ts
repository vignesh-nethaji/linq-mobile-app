import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Ordering } from './ordering';

@NgModule({
  declarations: [
    Ordering,
  ],
  imports: [
    IonicPageModule.forChild(Ordering),
  ],
  exports: [
    Ordering
  ]
})
export class OrderingModule {}
