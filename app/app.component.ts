// #docregion
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
const EMAIL_REGEX1 = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const EMAIL_REGEX = "[a-z]*";
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls:['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {

  constructor() { ;
  }
  title = 'app';
  email : string;
  password : string;
  confirmPassword:string;
 public onSubmit(){
      console.log("OnSubmit: ");
 }
}