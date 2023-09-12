import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChoosePodcastsPage } from './choose-podcasts.page';

const routes: Routes = [
  {
    path: '',
    component: ChoosePodcastsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChoosePodcastsPageRoutingModule {}
