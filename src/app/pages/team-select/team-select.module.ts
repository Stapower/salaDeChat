import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TeamSelectPageRoutingModule } from './team-select-routing.module';

import { TeamSelectPage } from './team-select.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TeamSelectPageRoutingModule
  ],
  declarations: [TeamSelectPage]
})
export class TeamSelectPageModule {}
