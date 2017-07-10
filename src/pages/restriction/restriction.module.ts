import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Restriction } from './restriction';

@NgModule({
  declarations: [
    Restriction,
  ],
  imports: [
    IonicPageModule.forChild(Restriction),
  ],
  exports: [
    Restriction
  ]
})
export class RestrictionModule {}
