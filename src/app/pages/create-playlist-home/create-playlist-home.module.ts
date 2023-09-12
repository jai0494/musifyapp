import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreatePlaylistHomePageRoutingModule } from './create-playlist-home-routing.module';

import { CreatePlaylistHomePage } from './create-playlist-home.page';
import { FooterModule } from 'src/app/components/footer/footer.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreatePlaylistHomePageRoutingModule,FooterModule
  ],
  declarations: [CreatePlaylistHomePage]
})
export class CreatePlaylistHomePageModule {}
