import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LibrarySearchPageRoutingModule } from './library-search-routing.module';

import { LibrarySearchPage } from './library-search.page';
import { FooterModule } from 'src/app/components/footer/footer.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LibrarySearchPageRoutingModule,FooterModule
  ],
  declarations: [LibrarySearchPage]
})
export class LibrarySearchPageModule {}
