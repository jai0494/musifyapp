import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChooseGenderPage } from './choose-gender.page';

const routes: Routes = [
  {
    path: '',
    component: ChooseGenderPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChooseGenderPageRoutingModule {}
