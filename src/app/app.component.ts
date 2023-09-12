import { Component } from '@angular/core';
import { SignUpPage } from './pages/sign-up/sign-up.page';
import { ModalController } from '@ionic/angular';
import { SplashComponent } from './splash/splash.component';
import { register } from 'swiper/element/bundle';
register();

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private modalController:  ModalController ) { 
    this.presentSplash();
  }
  async presentSplash() {
   
    const modal = await this.modalController.create({
      component: SplashComponent,
      cssClass: 'my-custom-class'
    });
    return await modal.present();
}

}
