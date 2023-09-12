import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewPlansPageRoutingModule } from './view-plans-routing.module';

import { ViewPlansPage } from './view-plans.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewPlansPageRoutingModule
  ],
  declarations: [ViewPlansPage]
})
export class ViewPlansPageModule {}
