import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LibraryMainPage } from './library-main.page';

const routes: Routes = [
  {
    path: '',
    component: LibraryMainPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LibraryMainPageRoutingModule {}
