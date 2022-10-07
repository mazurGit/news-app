import {Languages, SortBy} from '~/common/enums/enums';

enum ActionType {
  UPDATE_FILTER = 'filter/update',
  RESET_FILTER = 'filter/reset',
}

type InitialState = {
  sortBy: SortBy;
  from: Date;
  to: Date;
  language: Languages | null;
  q: null | string;
};

export {ActionType};
export type {InitialState};
