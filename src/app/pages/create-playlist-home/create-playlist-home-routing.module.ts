import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreatePlaylistHomePage } from './create-playlist-home.page';

const routes: Routes = [
  {
    path: '',
    component: CreatePlaylistHomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreatePlaylistHomePageRoutingModule {}
