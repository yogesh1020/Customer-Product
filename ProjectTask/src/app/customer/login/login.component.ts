import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {HttpClient, HttpParams} from '@angular/common/http'
import { config } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
loginFormGroup : FormGroup;
  CustomerDate: any;
  result:any;
  rootURL: string = 'https://localhost:44335/api';
  config: any;
  constructor(private formBuilder:FormBuilder , private router:Router , private http :HttpClient) { }

  ngOnInit(): void {
    this.loginFormGroup = this.formBuilder.group({
      email:['',Validators.required],
      password:['',Validators.required]
    })
  }
  submit(){
    if(this.loginFormGroup.invalid)
    {
      alert("Fild reuired");
    }
    else
    {
      let headers = new Headers();
        headers.append('Content-Type', 'application/json');
      let param  =  new HttpParams().set("Email",this.loginFormGroup.controls.email.value)
      .set("Password",this.loginFormGroup.controls.password.value)
      this.http.get(this.rootURL+'/Login',{params:param
      }).subscribe((res:any)=>this.result = res)
      console.log(this.result);
      sessionStorage.setItem('token',this.loginFormGroup.controls.email.value)
    }
  }
  

}