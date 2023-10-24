import { Component,Inject } from '@angular/core';
import { User } from '../app.module';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-userdisplay',
  templateUrl: './userdisplay.component.html',
  styleUrls: ['./userdisplay.component.css']
})
export class UserdisplayComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public userData: User) {}

}
