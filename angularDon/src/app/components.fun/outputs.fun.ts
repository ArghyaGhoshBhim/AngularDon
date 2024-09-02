import {
  Component,
  ComponentRef,
  OnInit,
  output,
  ViewContainerRef,
} from '@angular/core';

// Function-based outputs
@Component({
  selector: 'function-based-output',
  standalone: true,
  template: ` <button (click)="setNewName('arghya')">click me</button> `,
})
export class FunctionBasedOutput {
  onNameChange = output<string>(); // OutputEmitterRef<string>
  setNewName(newName: string) {
    this.onNameChange.emit(newName);
  }
}

@Component({
  selector: 'fun-output',
  standalone: true,
  imports: [FunctionBasedOutput],
  template: `
    <h1>Function-based outputs</h1>
    <function-based-output (onNameChange)="showNewName($event)" />
  `,
})
export class FunOutput implements OnInit {
  constructor(private viewContainerRef: ViewContainerRef) {}
  ngOnInit(): void {
    const myCmp = this.viewContainerRef.createComponent(FunctionBasedOutput);
    myCmp.instance.onNameChange.subscribe((newName) => {
      console.log("this from dynamic component ",newName);
    });
  }
  showNewName(event: string) {
    console.log(event);
  }
}
