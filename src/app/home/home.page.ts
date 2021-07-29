import { Component } from '@angular/core';
import { ModalController, Platform, ToastController } from '@ionic/angular';

import { ModalPage } from './modal-page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public nbBackBtnCalled = 0;

  constructor(
    public platform: Platform,
    public toastController: ToastController,
    public modalController: ModalController,
  ) {

    this.platform.backButton.subscribeWithPriority(2, () => {
      console.log('Back button with priority "2" called');
      this.nbBackBtnCalled++;
    });

  }

  public openModal() {
    this.modalController.create({
      component: ModalPage,
      showBackdrop: true,
    }).then((modal) => modal.present());
  }

  public openToast() {
    this.toastController.create({
      message: 'My toast to test (please click on back button yet)',
      duration: 5000,
      position: 'middle',
    }).then((toast) => toast.present());
  }

}
