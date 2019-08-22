import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {


  Name:String;
  Age:Number;
  Email;
  Address;
  Hobbies:String[];
  constructor() { 
    this.Name="Kelvin";
    this.Age=24;
    this.Email="Kelvin@gmail.com";
    this.Address={House:"Ham House", Street:"Long Isle", Dist:"EKM"};
    this.Hobbies=["Books", "Sports", "dsanf"];
  }

  ngOnInit() {
  }

}
