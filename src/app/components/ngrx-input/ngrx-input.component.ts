import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { skip, take } from 'rxjs';
import { GeneralActions } from '../../state/general.actions';
import { selectName } from '../../state/general.selectors';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-ngrx-input',
  imports: [CommonModule, RouterLink],
  templateUrl: './ngrx-input.component.html',
  styleUrl: './ngrx-input.component.scss',
})
export class NgrxInputComponent implements OnInit {
  private store = inject(Store);
  name$ = this.store.select(selectName);

  private destroyRef$ = inject(DestroyRef);
  private count = 0;

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
    this.store.dispatch(GeneralActions.addName({ name }));
  }

  onRemoveToString() {
    this.store.dispatch(GeneralActions.removeNameString({ name: null }));
  }

  onRemoveToNull() {
    this.store.dispatch(GeneralActions.removeNameNull({ name: null }));
  }

  subscribeOnceToNameSelector(): void {
    this.store
      .select(selectName)
      .pipe(take(1))
      .subscribe((value) => {
        console.log('once selectName: ', value);
      });
  }

  subscribeOnceWithSkipToNameSelector(): void {
    this.store
      .select(selectName)
      .pipe(skip(1), take(1))
      .subscribe((value) => {
        console.log('skip one once selectName: ', value);
      });
  }

  private subscribleToNameSelector(): void {
    this.store
      .select(selectName)
      .pipe(takeUntilDestroyed(this.destroyRef$))
      .subscribe((value) => {
        console.log('selectName: ', value);
      });
  }
}
