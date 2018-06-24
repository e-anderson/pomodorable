import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SimpleTimerPage } from './simple-timer';

@NgModule({
  declarations: [
    SimpleTimerPage,
  ],
  imports: [
    IonicPageModule.forChild(SimpleTimerPage),
  ],
})
export class SimpleTimerPageModule {}
