import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Conversion } from './conversion';

@NgModule({
  declarations: [
    Conversion,
  ],
  imports: [
    IonicPageModule.forChild(Conversion),
  ],
  exports: [
    Conversion
  ]
})
export class ConversionModule {}
