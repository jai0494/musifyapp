import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GetPremiumPageRoutingModule } from './get-premium-routing.module';

import { GetPremiumPage } from './get-premium.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GetPremiumPageRoutingModule
  ],
  declarations: [GetPremiumPage]
})
export class GetPremiumPageModule {}
