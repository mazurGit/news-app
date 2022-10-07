import {createAsyncThunk} from '@reduxjs/toolkit';
import {ActionType} from './common';
import {AsyncThunkConfig, ResponseDto, NewsQuery} from '~/common/types/types';
import uuid from 'react-native-uuid';

const getPopularNews = createAsyncThunk<
  ResponseDto,
  Readonly<NewsQuery>,
  AsyncThunkConfig
>(ActionType.NEWS_FETCH, async (requestParams, {extra}) => {
  const {news} = extra;
  const {status, articles, totalResults} = await news.getNews(requestParams);
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

export {getPopularNews};
