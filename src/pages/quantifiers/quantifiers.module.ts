import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Quantifiers } from './quantifiers';

@NgModule({
  declarations: [
    Quantifiers,
  ],
  imports: [
    IonicPageModule.forChild(Quantifiers),
  ],
  exports: [
    Quantifiers
  ]
})
export class QuantifiersModule {}
