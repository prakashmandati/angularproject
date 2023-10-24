import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css']
})
export class SampleComponent implements OnInit{
  selectedStudentCountRadioButton: string = 'All';
  students: any[] = [ { ID: 'std101', FirstName: 'manvi', LastName: 'Rout', DOB: '12/8/1988', Gender: 'Male', CourseFee: 1234.56 },
  { ID: 'std102', FirstName: 'prakash', LastName: 'Mohanty', DOB: '10/14/1989', Gender: 'Male', CourseFee: 6666.00 },
   { ID: 'std103', FirstName: 'supriya', LastName: 'Dewangan', DOB: '7/24/1992', Gender: 'Female', CourseFee: 6543.15 },
  { ID: 'std104', FirstName: 'haritha', LastName: 'Sharma', DOB: '8/19/1990', Gender: 'Female', CourseFee: 9000.50 }, 
  { ID: 'std105', FirstName: 'punith', LastName: 'Satapathy', DOB: '4/12/1991', Gender: 'Male', CourseFee: 9876.54 }, 
  { ID: 'std106', FirstName: 'manvith', LastName: 'Mallick', DOB: '4/10/1992', Gender: 'Male', CourseFee: 1278.55 } ]; 
  constructor() { } 
 ngOnInit() { } 
 getTotalStudentsCount(): any {
  return this.students.length; // Removed debugger statement
}

getMaleStudentsCount(): any {
  return this.students.filter(std => std.Gender === 'Male').length; // Removed debugger statement
}

getFemaleStudentsCount(): any {
  return this.students.filter(std => std.Gender === 'Female').length; // Removed debugger statement
}

onStudentCountRadioButtonChange(selectedRadioButtonValue: string): void {
  this.selectedStudentCountRadioButton = selectedRadioButtonValue;
}

}
