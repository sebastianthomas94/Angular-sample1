import { Component, OnInit } from '@angular/core';
import { start } from 'repl';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  products=[];
  cart=[];
  view:Boolean=false;

  constructor() { 
    this.products=[{name:"Redmi Note 7", price:10000, company:"Mi"},{name:"Samsung", price:10000, company:"Mi"},{name:"Apple", price:10000, company:"Mi"}]
  }

  ngOnInit() {
  }
  public add(i)
  {
    let cartadd=this.products[i];
    this.cart.push(cartadd);
  }

  public del(i)
  {

    this.cart.splice(i,1);
  }



}
