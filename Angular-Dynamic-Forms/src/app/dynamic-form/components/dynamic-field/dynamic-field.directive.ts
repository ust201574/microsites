import { ComponentFactoryResolver, ComponentRef, Directive, Input, OnChanges, OnInit, Type, ViewContainerRef } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormInputComponent } from '../form-input/form-input.component';
import { FormSelectComponent } from '../form-select/form-select.component';

import { Field } from '../../models/field.interface';
import { FieldConfig } from '../../models/field-config.interface';
import { FormCheckboxComponent } from './form-checkbox/form-checkbox.component';

const components: { [type: string]: Type<Field> } = {
    input!: FormInputComponent,
    select!: FormSelectComponent,
    checkbox!: FormCheckboxComponent,
    textarea!: FormInputComponent,
};

@Directive({
  selector: '[dynamicField]'
})
export class DynamicFieldDirective implements Field, OnChanges, OnInit {
  @Input()
  config!: FieldConfig;

  @Input()
  group!: FormGroup;

  component!: ComponentRef<Field>;

  constructor(
    private resolver: ComponentFactoryResolver,
    private container: ViewContainerRef
  ) { }

  ngOnChanges() {
    if (this.component) {
      this.component.instance.config = this.config;
      this.component.instance.group = this.group;
    }
  }


  ngOnInit() {
    console.log("ng on init",this.config,"test",components[this.config.databuildertype]);

    if (!components[this.config.databuildertype]) {
      const supportedTypes = Object.keys(components).join(', ');
      throw new Error(
        `Trying to use an unsupported type (${this.config.databuildertype}).
        Supported types: ${supportedTypes}`
      );
    }

    this.container.clear();
    const singleComponent = this.resolver.resolveComponentFactory<Field>(components[this.config.databuildertype]);
    this.component = this.container.createComponent(singleComponent);
    this.component.instance.config = this.config;
    this.component.instance.group = this.group;
  }
}