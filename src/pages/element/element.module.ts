import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ElementPage } from './element';

@NgModule({
  declarations: [
    ElementPage,
  ],
  imports: [
    IonicPageModule.forChild(ElementPage),
  ],
  exports: [
    ElementPage
  ]
})
export class ElementPageModule {}
