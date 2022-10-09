import {createReducer} from '@reduxjs/toolkit';
import {getNews, resetNews} from './actions';
import {DtoStatus} from '~/common/enums/enums';
import {InitialState} from './common';

const initialState: InitialState = {
  totalResults: 0,
  page: 1,
  articles: [],
  dataStatus: DtoStatus.IDLE,
};

const reducer = createReducer(initialState, builder => {
  builder
    .addCase(getNews.pending, state => {
      state.dataStatus = DtoStatus.PENDING;
    })
    .addCase(getNews.rejected, state => {
      state.dataStatus = DtoStatus.REJECTED;
    })
    .addCase(getNews.fulfilled, (state, action) => {
      state.dataStatus = DtoStatus.FULFILLED;
      state.articles = [...state.articles, ...action.payload.articles];
      state.page = state.page + 1;
    })
    .addCase(resetNews, () => {
      return {...initialState};
    });
});

export {reducer};
