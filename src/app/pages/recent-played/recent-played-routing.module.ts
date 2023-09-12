import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecentPlayedPage } from './recent-played.page';

const routes: Routes = [
  {
    path: '',
    component: RecentPlayedPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecentPlayedPageRoutingModule {}
