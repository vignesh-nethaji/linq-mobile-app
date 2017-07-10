import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Aggregation } from './aggregation';

@NgModule({
  declarations: [
    Aggregation,
  ],
  imports: [
    IonicPageModule.forChild(Aggregation),
  ],
  exports: [
    Aggregation
  ]
})
export class AggregationModule {}
