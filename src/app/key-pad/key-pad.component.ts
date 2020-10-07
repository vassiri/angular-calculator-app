import { Component } from '@angular/core';

@Component({
  selector: 'app-key-pad',
  templateUrl: './key-pad.component.html',
  styleUrls: ['./key-pad.component.css']
})
export class KeyPadComponent  {

//var num1: number;
//var num2: number;
//var result: number;

public num1 : number;
public num2 : number;
public num3: number;

add(){
this.num3 = this.num1 + this.num2 ;
}

sub(){
this.num3 =  this.num1- this.num2 ;
}

multi(){
this.num3 = this.num1* this.num2;
}

div(){
this.num3 = this.num1 / this.num2;
}


}



