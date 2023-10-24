import { Component } from '@angular/core';
import { User } from '../app.module';
import { UserdisplayComponent } from '../userdisplay/userdisplay.component';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-userinput',
  templateUrl: './userinput.component.html',
  styleUrls: ['./userinput.component.css']
})
export class UserinputComponent {
  newUser: User = {
        name: '',
        lastname: '',
        dateOfBirth: '',
        city: '',
        state: ''
      };
    
      constructor(private dialog: MatDialog) {}
    
      openDialog(): void {
        const dialogRef = this.dialog.open(UserdisplayComponent, {
          data: this.newUser
        });
    
        dialogRef.afterClosed().subscribe(result => {
         
        });
      }

}
