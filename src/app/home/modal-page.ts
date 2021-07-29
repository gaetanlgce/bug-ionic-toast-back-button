import { Component, Input } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'modal-page',
  template: `
    <h3>My super modal</h3>
    <ion-button (click)="openToastFromModal()">Open toast from modal</ion-button>
  `
})
export class ModalPage {

  constructor(
    public toastController: ToastController,
  ) {}

  public openToastFromModal() {
    this.toastController.create({
      message: 'My toast to test from modal (please click on back button yet)',
      duration: 5000,
      position: 'middle',
    }).then((toast) => toast.present());
  }

}
