import {createReducer} from '@reduxjs/toolkit';
import {getPopularNews} from './actions';
import {DtoStatus} from '~/common/enums/enums';
import {InitialState} from './common';

const initialState: InitialState = {
  totalResults: 0,
  page: 1,
  articles: [],
  status: DtoStatus.IDLE,
};

const reducer = createReducer(initialState, builder => {
  builder
    .addCase(getPopularNews.pending, state => {
      state.status = DtoStatus.PENDING;
    })
    .addCase(getPopularNews.rejected, state => {
      state.status = DtoStatus.REJECTED;
    })
    .addCase(getPopularNews.fulfilled, (state, action) => {
      state.status = DtoStatus.FULFILLED;
      state.articles = action.payload.articles;
      state.page = state.page + 1;
    });
});

export {reducer};
