import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateAccountTermsPageRoutingModule } from './create-account-terms-routing.module';

import { CreateAccountTermsPage } from './create-account-terms.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateAccountTermsPageRoutingModule
  ],
  declarations: [CreateAccountTermsPage]
})
export class CreateAccountTermsPageModule {}
