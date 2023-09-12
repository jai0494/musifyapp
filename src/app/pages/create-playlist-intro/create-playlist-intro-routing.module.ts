import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreatePlaylistIntroPage } from './create-playlist-intro.page';

const routes: Routes = [
  {
    path: '',
    component: CreatePlaylistIntroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreatePlaylistIntroPageRoutingModule {}
