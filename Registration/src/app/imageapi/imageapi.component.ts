import { Component, OnInit } from '@angular/core';
import { TestService } from '../test.service';

@Component({
  selector: 'app-imageapi',
  templateUrl: './imageapi.component.html',
  styleUrls: ['./imageapi.component.css']
})
export class ImageapiComponent implements OnInit{

  constructor(public ts:TestService){}

  public getdateval:any;
  
  ngOnInit(): void {
    this.gettingdata();
  }

  gettingdata(){
    this.ts.getexamapiimage().subscribe((mydata:any)=>{
      console.log(mydata.data);
      this.getdateval=mydata.data;
    })
  }

}
