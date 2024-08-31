import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InputTransformParentComponent } from './components.fun/input.fun';
import { InputFun } from './components.fun/selectors.fun';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,InputTransformParentComponent,InputFun],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angularDon';
}
