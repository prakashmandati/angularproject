import { Component } from '@angular/core';
import {  Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { PopupComponent } from '../popup/popup.component';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent {
  
 
  constructor(private router:Router,public dialog:MatDialog){

  }
  transfer(){
    const mydate="my student data form student";
    this.router.navigate(['/master'],{queryParams:{my:mydate}})
  }
  openPoupCom(){
   const OpenCom=this.dialog.open(PopupComponent,{
     width:'700px'
   });
   
   OpenCom.afterClosed().subscribe( result =>{
    console.log("prakash");
   })
  
  }
  
}
