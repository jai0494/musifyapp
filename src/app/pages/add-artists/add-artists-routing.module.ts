import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddArtistsPage } from './add-artists.page';

const routes: Routes = [
  {
    path: '',
    component: AddArtistsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddArtistsPageRoutingModule {}
