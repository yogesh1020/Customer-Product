import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  rootURL: string='https://localhost:44335/api';
paymentFormGroup:FormGroup
  result: Object;
  total: any
  constructor(private http:HttpClient , private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.paymentFormGroup = this.formBuilder.group({
      cardNumber:['',Validators.compose([Validators.required,Validators.maxLength(16)])],
      exMonth:['',Validators.compose([Validators.required ,Validators.maxLength(2)])],
      exYear:['',Validators.compose([Validators.required ,Validators.maxLength(2)])],
      cvv:['',Validators.compose([Validators.required ,Validators.maxLength(3)])]
    })
    
    this.http.get(this.rootURL+'/Carts').subscribe(res => this.result = res)

  }

  submit(){
    if(this.paymentFormGroup.invalid){
      alert("Enter Correct Details")
    }
    else{
    this.http.post(this.rootURL+'/Payments',{
      CardNumber:this.paymentFormGroup.controls.cardNumber.value,
      ExMonth:this.paymentFormGroup.controls.exMonth.value,
      ExYear:this.paymentFormGroup.controls.exYear.value,
      Cvv:this.paymentFormGroup.controls.cvv.value
    }).subscribe(res=>{this.result = res})
    
    
  }

  }

}
