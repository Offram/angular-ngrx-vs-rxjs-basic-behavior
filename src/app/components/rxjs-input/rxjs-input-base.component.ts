import { inject, DestroyRef, Directive } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Subject, take, skip } from 'rxjs';
import { GeneralState } from '../../state/general.model';

@Directive({})
export class RxjsInputBaseComponent {
  protected nameSubject$ = new Subject<GeneralState['name']>();
  protected logType = 'Base';

  private destroyRef$ = inject(DestroyRef);
  private count = 0;

  private get logPrepend(): string {
    return `Rxjs ${this.logType}`;
  }

  getNewName(): string {
    return `name ${++this.count}`;
  }

  getSameName(): string {
    return `name ${this.count}`;
  }

  ngOnInit(): void {
    this.subscribleToNameSelector();
  }

  onAdd(name: string) {
    this.nameSubject$.next(name);
  }

  onRemoveToString() {
    this.nameSubject$.next('');
  }

  onRemoveToNull() {
    this.nameSubject$.next(null);
  }

  subscribeOnceToNameSelector(): void {
    this.nameSubject$.pipe(take(1)).subscribe((value) => {
      console.log(`${this.logPrepend} once selectName: `, value);
    });
  }

  subscribeOnceWithSkipToNameSelector(): void {
    this.nameSubject$.pipe(skip(1), take(1)).subscribe((value) => {
      console.log(`${this.logPrepend} skip one once selectName: `, value);
    });
  }

  private subscribleToNameSelector(): void {
    this.nameSubject$
      .pipe(takeUntilDestroyed(this.destroyRef$))
      .subscribe((value) => {
        console.log(`${this.logPrepend} selectName: `, value);
      });
  }
}
