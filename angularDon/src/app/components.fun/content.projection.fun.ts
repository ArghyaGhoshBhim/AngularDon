import { Component } from '@angular/core';

@Component({
  selector: 'custom-card-child',
  standalone: true,
  template: `
    <div class="card-shadow">
      <ng-content />
    </div>
  `,
})
export class CustomCardChild {}

@Component({
  selector: 'card-title',
  standalone: true,
  template: `
    <div class="card-title">
      <ng-content />
    </div>
  `,
})
export class CardTitle {}

@Component({
  selector: 'card-body',
  standalone: true,
  template: `
    <div class="card-body">
      <ng-content />
    </div>
  `,
})
export class CardBody {}
// Multiple content placeholders
@Component({
  selector: 'multiple-content-placeholders',
  standalone: true,
  template: `
    <div class="card-shadow">
      <h2>Multiple content placeholders</h2>
      <ng-content select="card-title"></ng-content>
      <div class="card-divider"></div>
      <ng-content select="card-body"></ng-content>
    </div>
  `,
})
export class MultipleContentPlaceholders {}

// Aliasing content for projection
@Component({
  selector: 'aliasing-content-projection',
  standalone: true,
  template: `
    <h2>Aliasing content for projection</h2>

    <div class="card-shadow">
      <ng-content select="card-title"></ng-content>
      <div class="card-divider"></div>
      <ng-content></ng-content>
    </div>
  `,
})
export class AliasingContentProjection {}

@Component({
  selector: 'custom-card',
  standalone: true,
  imports: [
    CustomCardChild,
    MultipleContentPlaceholders,
    CardTitle,
    CardBody,
    AliasingContentProjection,
  ],
  template: `
    <h1>Hi I am content.projection.fun.ts</h1>

    <custom-card-child>
      <h3>Hi I am content projection from CustomCard</h3>
    </custom-card-child>

    <multiple-content-placeholders>
      <card-title>Hello I am title</card-title>
      <card-body>Welcome to the example , I am card body</card-body>
    </multiple-content-placeholders>

    <aliasing-content-projection>
      <h3 ngProjectAs="card-title">Hello, I came as card title</h3>
      <p>hi all i am a p tag</p>
    </aliasing-content-projection>
  `,
})
export class CustomCard {}
