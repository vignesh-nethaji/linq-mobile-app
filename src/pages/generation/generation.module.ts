import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Generation } from './generation';

@NgModule({
  declarations: [
    Generation,
  ],
  imports: [
    IonicPageModule.forChild(Generation),
  ],
  exports: [
    Generation
  ]
})
export class GenerationModule {}
