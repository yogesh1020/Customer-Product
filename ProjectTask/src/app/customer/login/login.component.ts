import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {HttpClient} from '@angular/common/http'
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
      const param = this.loginFormGroup.value
      this.http.post(this.rootURL+'/Login',{
        Email:this.loginFormGroup.value.email,
        Password:this.loginFormGroup.value.password
      }).subscribe((res:any)=>this.result = res)
      console.log(this.result);
      sessionStorage.setItem('token',this.loginFormGroup.controls.email.value)
      
      if(this.result ==null){
        alert("enter valid username or password")
      }
      else{
        this.router.navigateByUrl('profile')
      }
    }
  }
  

}