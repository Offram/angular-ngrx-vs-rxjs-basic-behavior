import { createSelector, createFeatureSelector } from '@ngrx/store';
import { GeneralState } from './general.model';

export const selectGeneralState =
  createFeatureSelector<Readonly<GeneralState>>('general');

export const selectName = createSelector(selectGeneralState, (state) => {
  return state.name;
});

export const selectNameNullable = createSelector(
  selectGeneralState,
  (state) => {
    return state?.name;
  }
);
