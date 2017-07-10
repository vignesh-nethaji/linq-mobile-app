import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Join } from './join';

@NgModule({
  declarations: [
    Join,
  ],
  imports: [
    IonicPageModule.forChild(Join),
  ],
  exports: [
    Join
  ]
})
export class JoinModule {}
