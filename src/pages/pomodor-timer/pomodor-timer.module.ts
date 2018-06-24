import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PomodorTimerPage } from './pomodor-timer';

@NgModule({
  declarations: [
    PomodorTimerPage,
  ],
  imports: [
    IonicPageModule.forChild(PomodorTimerPage),
  ],
})
export class PomodorTimerPageModule {}
