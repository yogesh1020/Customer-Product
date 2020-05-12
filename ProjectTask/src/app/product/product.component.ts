import { Component, OnInit, NgModule } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  rootURL: string = 'https://localhost:44335/api';
  result:any
  search:any
  i:number
  isDesc: boolean = false;
  column: string = 'productName';
  records: any;
  total: void;

  constructor(private http:HttpClient ) { }

  ngOnInit(): void {

    this.http.get(this.rootURL+'/Products').subscribe((res:any)=>{
      this.result = res
    })
    

  }
  addToCart(i){
    this.http.post(this.rootURL+'/Carts',{ProductName:this.result[i].productName,
    Brand : this.result[i].brand,
    Price:this.result[i].price,
    }).subscribe((res:any)=>{
      this.result = res
    })
    console.log(this.result[i])
  }
 

}
