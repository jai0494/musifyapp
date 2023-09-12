import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LibraryMainPageRoutingModule } from './library-main-routing.module';

import { LibraryMainPage } from './library-main.page';
import { FooterModule } from 'src/app/components/footer/footer.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LibraryMainPageRoutingModule,FooterModule
  ],
  declarations: [LibraryMainPage]
})
export class LibraryMainPageModule {}
