import {ResponseDto} from '~/common/types/types';
import {DtoStatus} from '~/common/enums/enums';

enum ActionType {
  NEWS_FETCH = 'news/fetch',
  NEW_RESET = 'news/rest',
}

type InitialState = {
  totalResults: ResponseDto['totalResults'];
  articles: ResponseDto['articles'];
  dataStatus: DtoStatus;
  page: number;
};

export {ActionType};
export type {InitialState};
