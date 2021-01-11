import { Component } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-modalplace',
  templateUrl: './modalplace.page.html',
  styleUrls: ['./modalplace.page.scss'],
})
export class ModalplacePage {
  place: any;
  constructor(
    private modalController: ModalController,
    private navParams: NavParams
  ) {}
  ionViewDidEnter() {
    this.place = this.navParams.data.placeSelected;
  }
  async closeModal() {
    await this.modalController.dismiss();
  }
}
