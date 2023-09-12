import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FreePlanPageRoutingModule } from './free-plan-routing.module';

import { FreePlanPage } from './free-plan.page';
import { FooterModule } from 'src/app/components/footer/footer.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FreePlanPageRoutingModule,FooterModule
  ],
  declarations: [FreePlanPage]
})
export class FreePlanPageModule {}
