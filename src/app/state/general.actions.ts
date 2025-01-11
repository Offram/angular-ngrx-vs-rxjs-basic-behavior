import { createActionGroup, props } from '@ngrx/store';

export const GeneralActions = createActionGroup({
  source: 'Name',
  events: {
    'Add Name': props<{ name: string }>(),
    'Remove Name String': props<{ name: null }>(),
    'Remove Name Null': props<{ name: null }>(),
  },
});
