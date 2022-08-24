import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'form-input',
  templateUrl:'form-input.component.html',
  styleUrls: ["form-input.component.scss"]
})
export class FormInputComponent{
  @Input() config: any;
  group!: FormGroup;

  clearFormGroup(config: any):void {
    this.group.reset();
  }

  foods: string[] = ['Banana', 'Apple', 'Mango'];


}


