import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateBlendPage } from './create-blend.page';

const routes: Routes = [
  {
    path: '',
    component: CreateBlendPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateBlendPageRoutingModule {}
