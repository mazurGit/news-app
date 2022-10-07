import {RootScreenName} from '~/common/enums/enums';

type RootNavigationParamList = {
  [RootScreenName.HOME]: undefined;
  [RootScreenName.ARTICLE_DETAILS]: {id: string};
  [RootScreenName.FILTERS]: undefined;
};

export type {RootNavigationParamList};
