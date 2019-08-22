import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.css']
})
export class CalcComponent implements OnInit {

  constructor() { }

  add1:Boolean=false;
  sub1:Boolean=false;
  ngOnInit() {
  }

  public add(a,b)
  {
    return(a+b);
  }
  public sub(a,b)
  {
    return(a-b);
  }

}
