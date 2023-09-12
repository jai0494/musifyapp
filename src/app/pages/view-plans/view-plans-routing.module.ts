import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewPlansPage } from './view-plans.page';

const routes: Routes = [
  {
    path: '',
    component: ViewPlansPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewPlansPageRoutingModule {}
