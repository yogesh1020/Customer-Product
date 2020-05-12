import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, Validators } from '@angular/forms';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http'
 
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
registrationFormGroup : FormGroup;
  result: any;
  rootURL: string='https://localhost:44335/api';
  constructor(private formBuilder:FormBuilder , private router:Router , private http:HttpClient) { }
public customer : any;
  ngOnInit(): void {
    this.registrationFormGroup = this.formBuilder.group({
      firstName:['',Validators.required],
      lastName:['',Validators.required],
      email:['',Validators.required],
      password:['',Validators.required],
      confirmPassword:['',Validators.required],
      mobileNumber:['',Validators.required],
      gender:['',Validators.required],
      address:['',Validators.required],
      dob:['',Validators.required]
    })
  }
  check(){
    if(this.registrationFormGroup.controls.password.value == this.registrationFormGroup.controls.confirmPassword.value){

    }
    else{
      alert("Password Not Match");
      this.registrationFormGroup.controls.confirmPassword.reset();
    }
  }
  submit(){
    if(this.registrationFormGroup.invalid)
    {
      alert("validation required");
    }
   else{
     this.http.post(this.rootURL+'/Customers',{FirstName:this.registrationFormGroup.controls.firstName.value,
      LastName:this.registrationFormGroup.controls.lastName.value,
      Email:this.registrationFormGroup.controls.email.value,
      Password:this.registrationFormGroup.controls.password.value,
      MobileNumber:this.registrationFormGroup.controls.mobileNumber.value,
      Gender:this.registrationFormGroup.controls.gender.value,
      Address:this.registrationFormGroup.controls.address.value,
      Dob:this.registrationFormGroup.controls.dob.value,
    }).subscribe(res=>{this.result = res});
    console.log(this.result);
    console.log(this.registrationFormGroup.value)
    this.router.navigateByUrl('login');
   }
  }

}
