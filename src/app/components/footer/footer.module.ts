import { NgModule } from "@angular/core";
import { FooterComponent } from "./footer.component";
import { IonicModule } from '@ionic/angular'; 
import { RouterModule } from '@angular/router';


 @NgModule({
    declarations: [
        FooterComponent,
      ],
      imports: [IonicModule,RouterModule],
      exports: [
        FooterComponent,
      ]
 })
 export class FooterModule {}