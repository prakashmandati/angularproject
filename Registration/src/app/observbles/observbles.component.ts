import { Component, OnInit } from '@angular/core';
import { TestService } from '../test.service';


@Component({
  selector: 'app-observbles',
  templateUrl: './observbles.component.html',
  styleUrls: ['./observbles.component.css']
})
export class ObservblesComponent implements OnInit{
  public obsdata:any;
  constructor(public ts:TestService){}
  ngOnInit(): void {
    this.ts.getobsedata().subscribe((data)=>{
       this.obsdata=data;

    })
  }

}
