import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InputTransformParentComponent } from './components.fun/input.fun';
import { InputFun } from './components.fun/selectors.fun';
import { FunOutput } from './components.fun/outputs.fun';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,InputTransformParentComponent,InputFun, FunOutput],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angularDon';
}
