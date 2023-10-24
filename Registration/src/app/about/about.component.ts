import { Component, OnInit} from '@angular/core';
import { TestService } from '../test.service';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit{
  name="prakash";
  isbuttondisable=false;
  public heading1="heading";
  public isBlueText:boolean=false;
  public button1="button1";
  public gettingvalue='';
  showelemets=false;
  choice: string = 'option';
   clickme(){
    console.log("clicked....");
    this.gettingvalue=" gettingvalues";
   }
   //string operations
ngOnInit(): void {
 const fname ="prakash"
 const lname="MANDATI"
 console.log(fname)
 console.log(lname)
 console.log(fname.length)
 console.log(lname.length)
 console.log(fname.toUpperCase());
 console.log(lname.toLowerCase());
 console.log(fname.substring(1,3))
 console.log(fname.replace("prakash","hello prakash "))

}

//arrays and objects 
// Declare an array of numbers
numbers: number[] = [1, 2, 3, 4, 5];

// Declare an array of strings
names: string[] = ['Alice', 'Bob', 'Charlie'];

// You can also declare an array of objects with a specific structure
people: { name: string, age: number }[] = [
  { name: 'Alice', age: 30 },
  { name: 'Bob', age: 25 },
  { name: 'Charlie', age: 35 }
];
   
constructor (private ts:TestService){}
mobiles=this.ts.mobiles

gethttp(){
  this.ts.urlresponse().subscribe((data:any)=>{
    console.log(data);
  })
 
}

}
