import { Component } from '@angular/core';
import { TestService } from '../test.service';



@Component({
  selector: 'app-onewaydatabinding',
  templateUrl: './onewaydatabinding.component.html',
  styleUrls: ['./onewaydatabinding.component.css']
})
export class OnewaydatabindingComponent {

city:string="hyderabad";
path:string="../assets/earth1.jpeg";
cname:string="special"
d:Date=new Date();
isdisable:boolean=false;

constructor(public ts:TestService){}
mobiles=this.ts.mobiles
pageHeader: string = 'Student Details';
    FirstName: string = 'Anurag';
    LastName: string = 'Mohanty';
    Branch: string = 'CSE';
    Mobile: number = 9876543210;
    Gender: string = 'Male';
    Age: number = 22;


    navigate(){

    }
}
