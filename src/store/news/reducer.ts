import {createReducer} from '@reduxjs/toolkit';
import {ResponseDto} from '~/common/types/types';
import {getPopularNews} from './actions';
import {DtoStatus} from '~/common/enums/enums';

const initialState: ResponseDto = {
  totalResults: 0,
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
    });
});

export {reducer};
