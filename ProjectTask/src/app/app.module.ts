import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerComponent } from './customer/customer.component';
import { ProductComponent } from './product/product.component';
import { RouterModule } from '@angular/router';
import { RegistrationComponent } from './customer/registration/registration.component';
import { LoginComponent } from './customer/login/login.component';
import { ProfileComponent } from './customer/profile/profile.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EditComponent } from './customer/profile/edit/edit.component';
import { AddComponent } from './product/add/add.component';
import {Ng2SearchPipeModule} from 'ng2-search-filter'
import {AgGridModule, AgGridAngular} from 'ag-grid-angular';
import { CartComponent } from './cart/cart.component';
import { PaymentComponent } from './payment/payment.component'

@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    ProductComponent,
    RegistrationComponent,
    LoginComponent,
    ProfileComponent,
    EditComponent,
    AddComponent,
    CartComponent,
    PaymentComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    AgGridModule.withComponents([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
