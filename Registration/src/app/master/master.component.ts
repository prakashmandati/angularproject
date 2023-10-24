import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-master',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.css']
})
export class MasterComponent {
  getdata = '';

  constructor(private router: ActivatedRoute) {}
  
  ngOnInit() { // Correct the method name to ngOnInit
    this.router.queryParams.subscribe(params => {
      const myRecivingData = params['my'];
      console.log(myRecivingData + " we are in master component");
      this.getdata = myRecivingData;
    });
  }
}


