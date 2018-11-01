import { Component, OnInit } from '@angular/core';
import { NavController} from 'ionic-angular';

import {MatDialog} from "@angular/material";
import * as firebase from 'firebase';


@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage{

  ref = firebase.database().ref('proyectos/')
  proyectos = [];

  constructor(public navCtrl: NavController) {


  this.ref.on('value', resp => {
  this.proyectos = [];
  this.proyectos = snapshotToArray(resp);
});
}

}

export const snapshotToArray = snapshot=> {

  let returnArr=[];
  snapshot.forEach(childSnapshot=>{
    let item = childSnapshot.val();
    item.key = childSnapshot.key;
    returnArr.push(item);
  });
  return returnArr;
}


