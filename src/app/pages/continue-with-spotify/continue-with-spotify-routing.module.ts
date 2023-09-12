import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContinueWithSpotifyPage } from './continue-with-spotify.page';

const routes: Routes = [
  {
    path: '',
    component: ContinueWithSpotifyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContinueWithSpotifyPageRoutingModule {}
