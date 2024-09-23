import { Component, ElementRef, OnInit, Renderer2 } from "@angular/core";

@Component({
    selector:'profile-photo',
    standalone:true,
    template:`
    <h2>Hi I am content from ProfilePhoto</h2>
    `
})
export class ProfilePhoto {
  constructor(elementRef: ElementRef) {
    console.log("FunUseDOMApi: Hello, I am from ProfilePhoto under ", elementRef.nativeElement.innerHTML);
  }
}


@Component({
    selector:'render-example',
    standalone:true,
    imports:[ProfilePhoto],
    template:`
    <h2>Hello, from RenderExampleComponent</h2>
    <div #container></div>
    `,
    styles: ['.dynamic-element { color: red; }']
})
export class RenderExampleComponent implements OnInit{
    constructor(private render:Renderer2, private el: ElementRef){}
    ngOnInit(): void {
        const container=this.el.nativeElement.querySelector('#container');
        const newElemet=this.render.createElement("profile-photo");
        this.render.addClass(newElemet, 'dynamic-element');
        this.render.setProperty(newElemet, 'textContent', 'This is a dynamic element');
        this.render.appendChild(container, newElemet);
    }

}

@Component({
    selector:'use-dom-api',
    standalone:true,
    imports:[ProfilePhoto, RenderExampleComponent],
    template:`
    <h1>Using DOM APIs FUN</h1>
    <profile-photo />
    <render-example />
    `
})
export class FunUseDOMApi {
}