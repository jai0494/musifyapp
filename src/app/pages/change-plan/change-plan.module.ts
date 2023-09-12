import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChangePlanPageRoutingModule } from './change-plan-routing.module';

import { ChangePlanPage } from './change-plan.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChangePlanPageRoutingModule
  ],
  declarations: [ChangePlanPage]
})
export class ChangePlanPageModule {}
