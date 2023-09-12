import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContinueWithPhonePageRoutingModule } from './continue-with-phone-routing.module';

import { ContinueWithPhonePage } from './continue-with-phone.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContinueWithPhonePageRoutingModule
  ],
  declarations: [ContinueWithPhonePage]
})
export class ContinueWithPhonePageModule {}
