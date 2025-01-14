import { Component } from '@angular/core';
import { RxjsInputBaseComponent } from '../rxjs-input-base.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-rxjs-subject',
  imports: [CommonModule],
  templateUrl: './rxjs-subject.component.html',
  styleUrl: './rxjs-subject.component.scss',
})
export class RxjsSubjectComponent extends RxjsInputBaseComponent {
  protected override logType = 'Subject';
}
