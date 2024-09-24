import { NgComponentOutlet } from "@angular/common";
import { Component, ComponentFactoryResolver, Input, OnInit, ViewChild, ViewContainerRef } from "@angular/core";

export interface User {
    id: string,
    name: string,
    isAdmin: boolean,
}
@Component({
    selector: 'standard-bio',
    standalone: true,
    template:
        `
    <h3>Hello from StandardBio</h3>
    `
})
export class StandardBio { }

@Component({
    selector: 'admin-bio',
    standalone: true,
    template:
        `
    <h3>Hello from AdminBio</h3>
    `
})
export class AdminBio { /* ... */ }

@Component({
    selector: 'custom-dialog',
    standalone: true,
    imports: [StandardBio, AdminBio, NgComponentOutlet],
    template: `
    <p>Profile for {{user.name}}</p>
    <ng-container *ngComponentOutlet="getBioComponent()" /> `
})
export class CustomDialog {
    @Input() user!: User;
    getBioComponent() {
        return this.user.isAdmin ? AdminBio : StandardBio;
    }
}
//////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////
// Using ViewContainerRef
@Component({
    selector: 'leaf-content',
    standalone: true,
    template: `
      This is the leaf content
    `,
})
export class LeafContent { }



@Component({
    selector: 'inner-item',
    standalone: true,
    imports: [LeafContent],
    template: `
      <button (click)="loadContent()">Load content</button>
    `,
})
export class InnerItem {
    constructor(private viewContainer: ViewContainerRef) { }
    loadContent() {
        this.viewContainer.createComponent(LeafContent);
    }
}

@Component({
    selector: 'outer-container',
    standalone: true,
    imports:[InnerItem],
    template: `
      <p>This is the start of the outer container</p>
      <inner-item />
      <p>This is the end of the outer container</p>
    `,
})
export class OuterContainer { }
//////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////
@Component({
    selector: 'app-dynamic-component',
    standalone:true,
    template: `
      <div>
        <h2>Dynamic Component</h2>
        <p>Message: {{ message }}</p>
      </div>
    `
  })
  export class DynamicComponentComponent {
    @Input() message: string = 'Default message';
  }

  @Component({
    selector: 'app-parent',
    imports:[DynamicComponentComponent],
    standalone:true,
    template: `
      <div>
        <h1>Parent Component</h1>
        <button (click)="createComponent()">Create Dynamic Component</button>
        <ng-container #dynamicComponentContainer></ng-container>
      </div>
    `
  })
  export class ParentComponent implements OnInit {
    @ViewChild('dynamicComponentContainer', { read: ViewContainerRef }) container!: ViewContainerRef;
  
    constructor(private componentFactoryResolver: ComponentFactoryResolver) {}
  
    ngOnInit() {}
  
    createComponent() {
      this.container.clear();
      const componentFactory = this.componentFactoryResolver.resolveComponentFactory(DynamicComponentComponent);
      const componentRef = this.container.createComponent(componentFactory);
      componentRef.instance.message = 'Hello from dynamically created component!';
    }
  }
//////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////

// Lazy-loading components
//need to implement
@Component({
    selector: 'fun-programmatically-rendering',
    standalone: true,
    imports: [CustomDialog, OuterContainer, ParentComponent],
    template:
        `
    <h1>programmatically.rendering.components.fun.ts</h1>
    <custom-dialog [user]="user1"/>
    <custom-dialog [user]="user2"/>
    <outer-container />
    <app-parent />

    `
})


export class ProgrammaticallyRendering implements OnInit {

    user1!: User;
    user2!: User;
    ngOnInit(): void {
        this.user1 = {
            id: "10072473",
            name: "arghya",
            isAdmin: true
        }
        this.user2 = {
            id: "10674072473",
            name: "bappa",
            isAdmin: false
        }
    }
}