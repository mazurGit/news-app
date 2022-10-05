import {createReducer} from '@reduxjs/toolkit';
import {ResponseDto} from '~/common/types/types';
import {getPopularNews} from './actions';
import {DtoStatus} from '~/common/enums/enums';

type InitialState = {
  totalResults: ResponseDto['totalResults'];
  articles: ResponseDto['articles'];
  status: DtoStatus;
  page: number;
};

const initialState: InitialState = {
  totalResults: 0,
  page: 0,
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
      state.articles = [...state.articles, ...action.payload.articles];
      state.page = state.page + 1;
    });
});

export {reducer};
