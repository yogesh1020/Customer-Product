import { Component, OnInit } from '@angular/core';
import {HttpClient} from'@angular/common/http'
import {Subscription } from'rxjs'
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {


rootURL: string = 'https://localhost:44335/api';
  result: any;
  rowData : any
  constructor(public http:HttpClient) { }

  ngOnInit(): void {
    this.rowData = this.http.get<any[]>(this.rootURL+'Customers').subscribe(data => {
      this.result = data;
       console.log("data",this.result);
    });


    
  }


}
