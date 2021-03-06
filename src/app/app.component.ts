import { Component } from '@angular/core';
import { Platform} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage} from '../pages/tabs/tabs';
import {HomePage} from "../pages/home/home";
import {AboutPage} from "../pages/about/about";
import {ContactPage} from "../pages/contact/contact";
import * as firebase from 'firebase';
import {ConsultarpPage} from "../pages/consultarp/consultarp";

var config = {
  apiKey: "AIzaSyB-Pqtp6IT4cNOEmu0uGbjecbkneIQeHsw",
  authDomain: "umbciapat.firebaseapp.com",
  databaseURL: "https://umbciapat.firebaseio.com",
  projectId: "umbciapat",
  storageBucket: "umbciapat.appspot.com",
  messagingSenderId: "139567252361"
};

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = TabsPage;
    Home = HomePage;
    Tabs = TabsPage;
    About = AboutPage;
    Contact = ContactPage;
    ConsultarP = ConsultarpPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
firebase.initializeApp(config);

  }



}


