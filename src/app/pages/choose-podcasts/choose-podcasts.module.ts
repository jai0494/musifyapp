import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChoosePodcastsPageRoutingModule } from './choose-podcasts-routing.module';

import { ChoosePodcastsPage } from './choose-podcasts.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChoosePodcastsPageRoutingModule
  ],
  declarations: [ChoosePodcastsPage]
})
export class ChoosePodcastsPageModule {}
