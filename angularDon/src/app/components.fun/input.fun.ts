import { Component, Input } from '@angular/core';

@Component({
  selector: 'input-transform',
  standalone: true,
  template: `
    <h1>transform: {{ label }}</h1>
    <h1>alias: {{ value }}</h1>
    <h2>Inputs with getters and setters: {{ internalValue }}</h2>
  `,
  inputs: ['disabled: sliderDisabled'],
})
export class InputTransformComponent {
  @Input({ transform: (value: number) => value * 100 }) label = 0;
  @Input({ alias: 'diffName' }) value = '';
  @Input()
  set inputWithGetterSetters(newValue: number) {
    this.internalValue = newValue;
  }
  internalValue = 0;
}

@Component({
  selector: 'input-transform-parent',
  standalone: true,
  template: `<input-transform
    [label]="value"
    [diffName]="aliasValue"
    [inputWithGetterSetters]="1033"
  />`,
  imports: [InputTransformComponent],
})
export class InputTransformParentComponent {
  value = 10;
  aliasValue = 'I am alias';
}
