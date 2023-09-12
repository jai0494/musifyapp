import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SignUpPasswordPageRoutingModule } from './sign-up-password-routing.module';

import { SignUpPasswordPage } from './sign-up-password.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SignUpPasswordPageRoutingModule
  ],
  declarations: [SignUpPasswordPage]
})
export class SignUpPasswordPageModule {}
