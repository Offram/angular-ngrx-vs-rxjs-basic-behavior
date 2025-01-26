import { createActionGroup, emptyProps, props } from '@ngrx/store';

export const GeneralActions = createActionGroup({
  source: 'Name',
  events: {
    'Add Name': props<{ name: string }>(),
    'Remove Name String': emptyProps(),
    'Remove Name Null': emptyProps(),
  },
});
