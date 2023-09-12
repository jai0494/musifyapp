import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChooseGenderPageRoutingModule } from './choose-gender-routing.module';

import { ChooseGenderPage } from './choose-gender.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChooseGenderPageRoutingModule
  ],
  declarations: [ChooseGenderPage]
})
export class ChooseGenderPageModule {}
