import {Component, ViewChild} from '@angular/core';
import { MatRadioChange } from '@angular/material';
/**
 * @title Basic radios
 */
@Component({
  selector: 'radio-overview-example',
  templateUrl: 'radio-overview-example.html',
  styleUrls: ['radio-overview-example.css'],
})
export class RadioOverviewExample {
  inputOtro: string;
  seasons: string[] = ['Winter', 'Spring', 'Summer', 'Autumn'];
  radioSeleccionado: string;
  valorSeleccionado: string;
  otroSinTexto=true;

   @ViewChild('otro') private otroInput;

  constructor(){
  }

  public marcar(){
    // console.log(1);
    this.otroInput.checked = true;
    this.radioSeleccionado = 'otro';
    this.valorSeleccionado = this.inputOtro;
    this.otroSinTexto = true;
  }

  public seleccionado(event: MatRadioChange){
    this.otroSinTexto = true;
    // console.log(2);
    this.radioSeleccionado = event.value;
    this.valorSeleccionado = '';
    if (event.value === 'otro') {
      // console.log('otro');
      if ( !this.inputOtro){
        this.otroSinTexto = true;
        // console.log('no existe');
      } else {
        // console.log('tiene texto');
        this.otroSinTexto = false;
        this.valorSeleccionado = this.otroInput;
      }
        this.valorSeleccionado = this.otroInput;
    } else if (event.value === undefined){
      // console.log('undefined');
      if ( this.inputOtro && this.inputOtro.length === 0){
        this.otroSinTexto = true;
        // console.log('otro if');
      } else {
        // console.log('otro else');
        this.otroSinTexto = false;
        this.valorSeleccionado = this.otroInput;
      }
    }
    else {
      this.otroSinTexto = false;
      this.radioSeleccionado = event.value;
      this.valorSeleccionado = event.value;
    }
  }

  public respuesta(){
    console.log(this.valorSeleccionado);
  }

  
  
}


/**  Copyright 2019 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */