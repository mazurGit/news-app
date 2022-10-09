import {createReducer} from '@reduxjs/toolkit';
import {SortBy} from '~/common/enums/enums';
import {updateFilter, resetFilter} from './actions';
import {InitialState} from './common';
import {dateRange} from '~/common/constants/date-range';

const initialState: InitialState = {
  sortBy: SortBy.POPULARITY,
  from: dateRange.MIN,
  to: dateRange.MAX,
  language: null,
  q: null,
};

const reducer = createReducer(initialState, builder => {
  builder
    .addCase(updateFilter, (state, action) => {
      return {...state, ...action.payload};
    })
    .addCase(resetFilter, () => {
      return {...initialState};
    });
});

export {reducer};
