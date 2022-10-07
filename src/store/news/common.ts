import {ResponseDto} from '~/common/types/types';
import {DtoStatus} from '~/common/enums/enums';

enum ActionType {
  NEWS_FETCH = 'news/fetch',
}

type InitialState = {
  totalResults: ResponseDto['totalResults'];
  articles: ResponseDto['articles'];
  status: DtoStatus;
  page: number;
};

export {ActionType};
export type {InitialState};
