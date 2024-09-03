import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InputTransformParentComponent } from './components.fun/input.fun';
import { InputFun } from './components.fun/selectors.fun';
import { FunOutput } from './components.fun/outputs.fun';
import { CustomCard } from './components.fun/content.projection.fun';
import { HostFun } from './components.fun/host.element.fun';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    InputTransformParentComponent,
    InputFun,
    FunOutput,
    CustomCard,
    HostFun
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'angularDon';
}
