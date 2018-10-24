import { Component } from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators, FormArray } from '@angular/forms';
import {HomePage} from "../home/home";
import * as firebase from 'firebase';
@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  ref = firebase.database().ref('proyectos/');
  infoForm: FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams, private formBuilder: FormBuilder) {


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
