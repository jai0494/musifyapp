import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddArtistsPageRoutingModule } from './add-artists-routing.module';

import { AddArtistsPage } from './add-artists.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddArtistsPageRoutingModule
  ],
  declarations: [AddArtistsPage]
})
export class AddArtistsPageModule {}
