import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Partitioning } from './partitioning';

@NgModule({
  declarations: [
    Partitioning,
  ],
  imports: [
    IonicPageModule.forChild(Partitioning),
  ],
  exports: [
    Partitioning
  ]
})
export class PartitioningModule {}
