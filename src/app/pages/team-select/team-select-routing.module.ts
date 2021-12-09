import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TeamSelectPage } from './team-select.page';

const routes: Routes = [
  {
    path: '',
    component: TeamSelectPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TeamSelectPageRoutingModule {}
