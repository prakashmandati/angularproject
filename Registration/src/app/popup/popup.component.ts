import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent {
  constructor( public dialogRef:MatDialogRef<PopupComponent>){

  }
  details: any[] = [
    { firstname:'prakash',lastname:'mandati',dob:'14-08-1998',city:'hyderabad',state:'Telangana' },
    { firstname:'pawan',lastname:'sharma',dob:'26-05-2000',city:'jaipur',state:'Rajasthan' },
    { firstname:'rakesh',lastname:'reddy',dob:'19-09-1999',city:'hyderabad',state:'Telangana' },
    
  ];

}
