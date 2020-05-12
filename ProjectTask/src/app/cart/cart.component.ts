import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  rootURL: string = 'https://localhost:44335/api';
  result: Object; 
price : Array<any>

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.http.get(this.rootURL+'/Carts').subscribe(res=>{this.result = res})

  }
  delete(id){
    this.http.delete(this.rootURL+'/Carts/'+id).subscribe()
  }
}
