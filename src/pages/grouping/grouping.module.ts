import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Grouping } from './grouping';

@NgModule({
  declarations: [
    Grouping,
  ],
  imports: [
    IonicPageModule.forChild(Grouping),
  ],
  exports: [
    Grouping
  ]
})
export class GroupingModule {}
