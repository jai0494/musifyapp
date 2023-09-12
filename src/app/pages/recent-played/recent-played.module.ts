import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecentPlayedPageRoutingModule } from './recent-played-routing.module';

import { RecentPlayedPage } from './recent-played.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecentPlayedPageRoutingModule
  ],
  declarations: [RecentPlayedPage]
})
export class RecentPlayedPageModule {}
