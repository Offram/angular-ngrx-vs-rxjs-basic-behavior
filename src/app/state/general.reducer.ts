import { createReducer, on } from '@ngrx/store';
import { GeneralState } from './general.model';
import { GeneralActions } from './general.actions';

export const initialState: Readonly<GeneralState> = {
  name: undefined,
};

export const generalReducer = createReducer(
  initialState,
  on(GeneralActions.removeNameString, (state) => {
    return {
      ...state,
      name: '',
    };
  }),
  on(GeneralActions.removeNameNull, (state) => {
    return {
      ...state,
      name: null,
    };
  }),
  on(GeneralActions.addName, (state, action) => {
    return {
      ...state,
      name: action.name,
    };
  })
);
