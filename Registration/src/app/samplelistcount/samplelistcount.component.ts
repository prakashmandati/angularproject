import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-samplelistcount',
  templateUrl: './samplelistcount.component.html',
  styleUrls: ['./samplelistcount.component.css']
})
export class SamplelistcountComponent implements OnInit {
  @Input() all: any; 
  @Input() male: any;
   @Input() female: any;
   selectedRadioButtonValue: string = 'All';
   @Output() countRadioButtonSelectionChanged: EventEmitter<string> = new EventEmitter<string>();
   constructor() { }
   ngOnInit() { } 
  onRadioButtonSelectionChange() {
   this.countRadioButtonSelectionChanged .emit(this.selectedRadioButtonValue); 
  }

}
