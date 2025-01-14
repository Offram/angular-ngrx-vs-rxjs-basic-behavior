import { Component } from '@angular/core';
import { RxjsInputBaseComponent } from '../rxjs-input-base.component';
import { CommonModule } from '@angular/common';
import { BehaviorSubject } from 'rxjs';
import { GeneralState } from '../../../state/general.model';

@Component({
  selector: 'app-rxjs-behavior-subject',
  imports: [CommonModule],
  templateUrl: './rxjs-behavior-subject.component.html',
  styleUrl: './rxjs-behavior-subject.component.scss',
})
export class RxjsBehaviorSubjectComponent extends RxjsInputBaseComponent {
  protected override nameSubject$ = new BehaviorSubject<GeneralState['name']>(
    undefined
  );
  protected override logType = 'Behavior Subject';
}
