import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignUpPasswordPage } from './sign-up-password.page';

const routes: Routes = [
  {
    path: '',
    component: SignUpPasswordPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SignUpPasswordPageRoutingModule {}
