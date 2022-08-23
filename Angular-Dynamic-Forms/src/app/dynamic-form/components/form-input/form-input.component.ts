import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'form-input',
  templateUrl:'form-input.component.html',
  styleUrls: ["form-input.component.scss"]
})
export class FormInputComponent implements OnInit {
  @Input() config: any;
  group!: FormGroup;

  ngOnInit(){
 // console.log("jannnn",this.config);
  }

  clearFormGroup(config: any):void {
    this.group.reset();
  }

  foods: string[] = ['Banana', 'Apple', 'Mango'];


}


