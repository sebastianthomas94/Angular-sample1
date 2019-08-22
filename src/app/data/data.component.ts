import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {

  project=[];

  constructor() { 
    this.project=[{name:"abc", duration:"30 days", enddate:"10/10/2019"},{name:"abc", duration:"30 days", enddate:"10/10/2019"},{name:"abc", duration:"30 days", enddate:"10/10/2019"}]
  }

  ngOnInit() {
  }

  public add()
  {
    let data=[{name:"abc", duration:"30 days", enddate:"10/10/2019"}];
    this.project.push(data);
  }

}
