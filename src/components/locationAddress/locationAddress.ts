import { Component } from '@angular/core';
import { ModalController } from 'ionic-angular';
import { LocationPage } from "../../pages/location/location"

/**
 * Generated class for the LocationComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'location',
  templateUrl: 'locationAddress.html'
})
export class LocationAddressComponent {

  text: string;

  constructor(
    public modalCtrl: ModalController
  ) {
    console.log('Hello LocationComponent Component');
    this.text = 'Av. Paraná. 1600 - Zona 1';
  }

  setLocation () {
    console.log('setting..');
  }

  presentModalLocation(){
    const modal = this.modalCtrl.create(LocationPage);
    modal.present();
  }


}
