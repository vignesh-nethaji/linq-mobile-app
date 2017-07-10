import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Projection } from './projection';

@NgModule({
  declarations: [
    Projection,
  ],
  imports: [
    IonicPageModule.forChild(Projection),
  ],
  exports: [
    Projection
  ]
})
export class ProjectionModule {}
