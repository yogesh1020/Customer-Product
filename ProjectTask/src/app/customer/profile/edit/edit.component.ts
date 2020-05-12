import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  rootURL: string = 'https://localhost:44335/api';
   email:string = sessionStorage.getItem('token')
result:any
editFormGroup:FormGroup
  customer: any;
  constructor(private http:HttpClient , private formBuilder:FormBuilder , private router:Router) { }

  ngOnInit(): void {
    this.editFormGroup = this.formBuilder.group({
      firstName:['',Validators.required],
      lastName:['',Validators.required],
      email:['',Validators.required],
      mobileNumber:['',Validators.required],
      gender:['',Validators.required],
      address:['',Validators.required],
      dob:['',Validators.required]
    })
    
    const param = {params : new HttpParams({fromString:"email = email"})}
    this.http.get(this.rootURL+'/Customers',param).subscribe(res=>{
      this.result = res
    })

  }

  submit(){
    if(this.editFormGroup.invalid)
    {
      alert("validation required");
    }
   else{
     this.customer = this.editFormGroup.value;
     this.http.post(this.rootURL+'/Customers',{FirstName:this.editFormGroup.controls.firstName.value,
      LastName:this.editFormGroup.controls.lastName.value,
      Email:this.editFormGroup.controls.email.value,
      MobileNumber:this.editFormGroup.controls.mobileNumber.value,
      Gender:this.editFormGroup.controls.gender.value,
      Address:this.editFormGroup.controls.address.value,
      Dob:this.editFormGroup.controls.dob.value,
    }).subscribe(res=>{this.result = res});
    console.log(this.result);
    console.log(this.editFormGroup.value)
    this.router.navigateByUrl('profile');
   }
  }

}
