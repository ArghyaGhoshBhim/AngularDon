import { Component, HostBinding, HostListener } from '@angular/core';

@Component({
  selector: 'host-custom-slider',
  standalone: true,
  template: ` <h3>slect me and press any key</h3> `,
  host: {
    role: 'slider',
    '[attr.aria-valuenow]': 'value',
    '[tabIndex]': 'disabled ? -1 : 0',
    '(keydown)': 'updateValue($event)',
  },
})
export class HostCustomSlider {
  value: number = 0;
  disabled: boolean = false;
  updateValue(event: KeyboardEvent) {
    console.log('hi I am from updateValue int HostCustomSlider', event);
  }
}

//We can do the same using @HostBinding and @HostListener
@Component({
  selector: 'host-custom-slider1',
  standalone: true,
  template: ` <h3>slect me and press any key</h3> `,
})
export class HostCustomSlider1 {
  disabled: boolean = false;
  @HostBinding('attr.aria-valuenow')
  value: number = 0;
  @HostBinding('tabIndex')
  getTabIndex() {
    return this.disabled ? -1 : 0;
  }

  @HostListener('keydown', ['$event'])
  updateValue(event: KeyboardEvent) {
    console.log('hi I am from updateValue in HostCustomSlider1 ', event);
  }
}

@Component({
  selector: 'host-fun',
  standalone: true,
  imports: [HostCustomSlider, HostCustomSlider1],
  template: `
    <h1>host.element.fun.ts</h1>
    <h2>Without using HostBinding and HostListener</h2>
    <host-custom-slider />
    <h2>Using HostBinding and HostListener</h2>
    <host-custom-slider1 />
  `,
})
export class HostFun {}
