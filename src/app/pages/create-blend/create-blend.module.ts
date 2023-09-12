import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateBlendPageRoutingModule } from './create-blend-routing.module';

import { CreateBlendPage } from './create-blend.page';
import { FooterModule } from 'src/app/components/footer/footer.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateBlendPageRoutingModule,FooterModule
  ],
  declarations: [CreateBlendPage]
})
export class CreateBlendPageModule {}
