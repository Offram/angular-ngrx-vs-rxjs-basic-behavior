import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NameInputComponent } from './components/name-input/name-input.component';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
