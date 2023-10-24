import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { TestService } from '../test.service';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit{
displayname:any;
myform:FormGroup;
constructor(public ts:TestService,private formbuilder:FormBuilder){
  this.myform=this.formbuilder.group({
    name:['',Validators.required],
    job:['',Validators.required]

  });
}
  ngOnInit(): void {
    
  }
onSubmit(){
  console.log(this.myform.value);
  this.ts.sendata(this.myform.value).subscribe((data:any)=>{
    if(data.id){
           this.displayname="register successful";
    }
  });
}
}
