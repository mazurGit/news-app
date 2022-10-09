import {Languages, SortBy} from '~/common/enums/enums';

type NewsQuery = {
  language?: Languages;
  from?: Date;
  to?: Date;
  sortBy?: SortBy;
  pageSize?: number;
  page?: number;
  q?: string;
  searchIn?: 'title' | 'description' | 'content';
};

export type {NewsQuery};
