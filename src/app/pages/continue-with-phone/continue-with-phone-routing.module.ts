import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContinueWithPhonePage } from './continue-with-phone.page';

const routes: Routes = [
  {
    path: '',
    component: ContinueWithPhonePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContinueWithPhonePageRoutingModule {}
