import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private ap: InAppBrowser) {
  }

  Openwhatsapp() {
    this.ap.create("https://api.whatsapp.com/send?phone=573053686250&text=%C2%A1Hola!%20Necesito%20m%C3%A1s%20informaci%C3%B3n,%20muchas%20gracias./", "_blank");
  }

  Openfb() {
    this.ap.create("https://www.facebook.com/UMBUniversidadManuelaBeltran/", "_blank");
  }

  OpenInsta() {
    this.ap.create("https://www.instagram.com/universidad_umb/", "_blank");
  }

  Openyoutube() {
    this.ap.create("https://www.youtube.com/channel/UC6nVzNDu4g6FWhWljgarg0Q", "_blank");
  }

  Opentwitter() {
    this.ap.create("https://twitter.com/UniversidadUMB", "_blank");
  }

}
