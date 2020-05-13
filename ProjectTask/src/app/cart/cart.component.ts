import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  rootURL: string = 'https://localhost:44335/api';
price : Array<any>
  result: Object;
  total:any;

  constructor(  private http:HttpClient) {
    
     }

  ngOnInit(): void {
    this.http.get(this.rootURL+'/Carts').subscribe(res=>{this.result = res})
    this.http.get(this.rootURL+'/Invoices').subscribe(res=>{this.total = res})
  }
  delete(id){
    console.log(this.price)
    this.http.delete(this.rootURL+'/Carts/'+id).subscribe()
    location.reload();
  }
}
