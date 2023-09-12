import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePagePageRoutingModule } from './home-page-routing.module';

import { HomePagePage } from './home-page.page';

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FooterModule } from '../../components/footer/footer.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePagePageRoutingModule,FooterModule
  ],
  declarations: [HomePagePage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  
})
export class HomePagePageModule {}

