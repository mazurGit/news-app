import {createAction} from '@reduxjs/toolkit';
import {ActionType} from './common';
import {InitialState} from './common';

const updateFilter = createAction<Partial<InitialState>>(
  ActionType.UPDATE_FILTER,
);

const resetFilter = createAction(ActionType.RESET_FILTER);

export {updateFilter, resetFilter};
