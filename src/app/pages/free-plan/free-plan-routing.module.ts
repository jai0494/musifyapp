import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FreePlanPage } from './free-plan.page';

const routes: Routes = [
  {
    path: '',
    component: FreePlanPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FreePlanPageRoutingModule {}
