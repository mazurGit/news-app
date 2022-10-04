import {RootScreenName} from '~/common/enums/enums';

type RootNavigationParamList = {
  [RootScreenName.HOME]: undefined;
  [RootScreenName.ARTICLE_DETAILS]: {id: string};
};

export type {RootNavigationParamList};
