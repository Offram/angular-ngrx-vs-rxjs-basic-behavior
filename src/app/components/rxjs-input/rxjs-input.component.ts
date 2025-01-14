import { Component } from '@angular/core';
import { RxjsSubjectComponent } from './rxjs-subject/rxjs-subject.component';
import { RxjsBehaviorSubjectComponent } from './rxjs-behavior-subject/rxjs-behavior-subject.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-rxjs-input',
  imports: [RxjsSubjectComponent, RxjsBehaviorSubjectComponent, RouterLink],
  templateUrl: './rxjs-input.component.html',
})
export class RxjsInputComponent {}
