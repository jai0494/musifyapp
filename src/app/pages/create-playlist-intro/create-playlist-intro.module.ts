import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreatePlaylistIntroPageRoutingModule } from './create-playlist-intro-routing.module';

import { CreatePlaylistIntroPage } from './create-playlist-intro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreatePlaylistIntroPageRoutingModule
  ],
  declarations: [CreatePlaylistIntroPage]
})
export class CreatePlaylistIntroPageModule {}
