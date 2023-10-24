import { Component, OnInit } from '@angular/core';
import { TestService } from '../test.service';

@Component({
  selector: 'app-freeapi',
  templateUrl: './freeapi.component.html',
  styleUrls: ['./freeapi.component.css']
})
export class FreeapiComponent implements OnInit{
  constructor( public ts:TestService){}
  public getdateval:any;
  public support:any;
  ngOnInit(): void {
    this.gettingdata();
  }

  gettingdata(){
    this.ts.getexamapi().subscribe((mydata:any)=>{
      console.log(mydata.data);
      this.getdateval=mydata.data;
      this.support=mydata.support.text;
      console.log(mydata.support.text);
    })
  }

}
