import { Component } from "@angular/core";

@Component({
    selector: 'button[yt-upload]',
    standalone:true,
    template:
    `
    Hi I a button
    `
  })
  export class CombindSelector { }
// Class selector
@Component({
    selector:'.class-selector',
    standalone:true,
    template:
    `
    <h2>Hi I am class selector</h2>
    `
})
export class ClassSelector{}

//Attribute selector
  @Component({
    selector:'[input-attribute-selector]',
    standalone:true,
    template:`
    <h1>Hi All, I am attribute selector</h1>
    `
  })
  export class InputAttributeSelector{}


  //Type selector
  @Component({
    selector: 'input-fun',
    standalone:true,
    imports:[InputAttributeSelector, ClassSelector, CombindSelector],
    template:`
    <span input-attribute-selector>hi all I am under span for attribute selector</span>
    <span input-attribute-selector my-space>hi all I am under span for attribute selector</span>
    <span class="class-selector">hi all I am under span for class selector</span>
    <button yt-upload></button>

    `
  })
  export class InputFun { }