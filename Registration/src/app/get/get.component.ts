import { Component, OnInit } from '@angular/core';
import { TestService } from '../test.service';


@Component({
  selector: 'app-get',
  templateUrl: './get.component.html',
  styleUrls: ['./get.component.css']
})
export class GetComponent implements OnInit{
 namelist:{name:string,value:string[]}[]=[];
  constructor(public ts:TestService){

  }
  ngOnInit(): void {
    this.getinfo();
    
  }
  getinfo(){
    this.ts.getdata().subscribe((dis:any)=>{

      console.log(dis.message);
      if(dis&&dis.message){
        for(const names of Object.keys(dis.message)){
            const subname=dis.message[names];
            this.namelist.push({name:names,value:subname})
        }
      }
    })
  }



}
