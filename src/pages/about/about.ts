import { Component } from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators, FormArray } from '@angular/forms';
import {HomePage} from "../home/home";
import * as firebase from 'firebase';
import { InAppBrowser } from '@ionic-native/in-app-browser';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  ref = firebase.database().ref('proyectos/');
  infoForm: FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams, private formBuilder: FormBuilder, private ap: InAppBrowser) {


    this.infoForm = this.formBuilder.group({
      'proy_nombrep' : [null, Validators.required],
      'proy_nombre' : [null, Validators.required],
      'proy_codigo' : [null, Validators.required],
      'proy_correo' : [null, Validators.required],
      'proy_semestre' : [null, Validators.required],
      'proy_telefono' : [null, null],
      'proy_carrera' : [null,  Validators.required],
      'proy_fecha' : [null,  Validators.required],
      'proy_intro' : [null,  Validators.required],
      'proy_resumen' : [null,  Validators.required]
    });


  }

  OpenLink(){
    this.ap.create("http://umb.edu.co/","_blank");
  }

  guardarDatos(){

 this.ref.push(this.infoForm.value);
    this.navCtrl.push(HomePage);

  }

}

export const snapshotToObject = snapshot => {
  let item = snapshot.val();
  item.key = snapshot.key;

  return item;
}
