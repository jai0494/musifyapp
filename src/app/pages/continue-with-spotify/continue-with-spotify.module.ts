import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContinueWithSpotifyPageRoutingModule } from './continue-with-spotify-routing.module';

import { ContinueWithSpotifyPage } from './continue-with-spotify.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContinueWithSpotifyPageRoutingModule
  ],
  declarations: [ContinueWithSpotifyPage]
})
export class ContinueWithSpotifyPageModule {}
