import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChangePlanPage } from './change-plan.page';

const routes: Routes = [
  {
    path: '',
    component: ChangePlanPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChangePlanPageRoutingModule {}
