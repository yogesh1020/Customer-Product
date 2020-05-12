import { Component, OnInit } from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  rootURL: string='https://localhost:44335/api';
  addFormGroup:FormGroup
  result:any;
  
  constructor(private http:HttpClient , private formBuilder:FormBuilder , private router:Router) { 
  
  }

  ngOnInit(): void {
    this.addFormGroup = this.formBuilder.group({
      productName:['',Validators.required],
      brand:['',Validators.required],
      price:['',Validators.required],
      status:['',Validators.required]
    })
  }

  submit(){
    if(this.addFormGroup.invalid)
    {
      alert("validation required");
    }
   else{
      this.http.post(this.rootURL+'/Products',{ProductName:this.addFormGroup.controls.productName.value,
      Brand:this.addFormGroup.controls.brand.value,
      Price:this.addFormGroup.controls.price.value,
      Status:this.addFormGroup.controls.status.value
    }).subscribe(res=>{this.result = res});
   this.router.navigateByUrl('product')
   }
  }
}
