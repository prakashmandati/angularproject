import { Component } from '@angular/core';
import { FormsModule,FormBuilder,FormGroup,Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
 regform:FormGroup
 submitted=false;
  constructor(private ts:FormBuilder){
    this.regform=this.ts.group({
      username:['',[Validators.required,Validators.maxLength(8)]],
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.minLength(8)]],
      confirmpassword:['',[Validators.required]],
      phone:['',[Validators.required,Validators.pattern('r"^[789]\d{9}$')]]
    },
    {
      Validators:this.passwordmatchvalidation
    }
    )

  }
  passwordmatchvalidation(form:FormGroup){
    const password=form.get('password');
    const cpassword=form.get('confirmpassword');
    if(password?.value!==cpassword?.value){
      return{
        mismatch:true
      }
    }
    else{
      return null
    }

  }
  ngOnInt():void{

  }
  sub(){
    console.log(this.regform.value);
    this.submitted=true
  }
  reset(){
    this.submitted=false;
    this.regform.reset();
  }

}
