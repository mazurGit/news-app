import {NewsDto, RootState} from '~/common/types/types';
import {createSelector} from '@reduxjs/toolkit';

const selectArticles = (state: RootState) => state.newsReducer.articles;

const selectArticleById = createSelector(
  selectArticles,
  (state: RootState, articleId: string) => articleId,
  (articles, articleId) => {
    const articleData = articles.find(item => item.id === articleId);
    return articleData as NewsDto;
  },
);
export {selectArticles, selectArticleById};
