import {Category, Countries} from '~/common/enums/enums';

type NewsQuery = {
  country?: Countries;
  category?: Category;
  pageSize?: number;
  page?: number;
};

export type {NewsQuery};
