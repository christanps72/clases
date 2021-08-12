import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-profiles',
  templateUrl: './profiles.component.html',
  styleUrls: ['./profiles.component.scss']
})
export class ProfilesComponent implements OnInit {
  
  nameExample : string="";
  lastNameExample : string="";
  generoExample : string="";
  ageExample : number=0;

  currentClassString :string=" ";
  currentClassesArray :string[]=[];
  currentClasses : Record<string, boolean>={};

  primary: boolean=true;
  features:boolean=true;
  config:boolean=true;
  isOne:boolean=true;

  idespecial :boolean= true;
  specialStyle = {};

  idActivate:boolean=true;
  isNull = null;
 // s=null;

  operacion:string="no es";

 names = [{n:'pedrito'},{n:'sandrita'},{n:'miyita'},{n:'jaimito'},{n:'luz'},{n:'brenda'}]


  constructor() { }


  ngOnInit(): void {

    this.currentClassString='textFeatures';
    this.currentClassesArray=['textFeatures','primary-color'];
    this.setCurrentClasse();

    this.idespecial=!this.idespecial;


  }

  setCurrentClasse(){

    this.currentClasses={

     'primary-color': this.primary,
      textFatures: this.features,
      special: this.config,
    }
    
  }

  setChangeStyle(){

    this.idespecial=!this.idespecial;


  }

  setSpecialStyle() {

    this.isOne=!this.isOne;
    let specialSyleOne={

     'color':'#FF5733',
     'font-size':'22px',
     'padding':'5px',

    }
    let specialStyleTwo={

     'color':'#F45703',
     'font-size':'11px',
     'padding':'20px',
    }

    this.specialStyle=this.isOne ? specialSyleOne:specialStyleTwo ;
    
  }

  setactivate()
  {
    this.idActivate=!this.idActivate;
  }

  setValue()
  {
   this.isNull =='VALUE';
  // this.s =='VALUE';
  }


}