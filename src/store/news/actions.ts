import {createAction, createAsyncThunk} from '@reduxjs/toolkit';
import {ActionType} from './common';
import {AsyncThunkConfig, ResponseDto, NewsQuery} from '~/common/types/types';
import uuid from 'react-native-uuid';

const getNews = createAsyncThunk<
  ResponseDto,
  Readonly<NewsQuery>,
  AsyncThunkConfig
>(ActionType.NEWS_FETCH, async (requestParams, {extra, getState}) => {
  const {news} = extra;
  const {
    newsReducer: {page},
  } = getState();
  const {status, articles, totalResults} = requestParams.q
    ? await news.getNewsWithSearchValue({
        ...requestParams,
        page,
        searchIn: 'title',
      })
    : await news.getNews({
        ...requestParams,
        page,
      });
  const modifiedResponse = {
    status,
    totalResults,
    articles: articles.map(article => ({
      ...article,
      id: uuid.v4().toString(),
    })),
  };
  return modifiedResponse;
});

const resetNews = createAction(ActionType.NEW_RESET);

export {getNews, resetNews};
