import React, {FC} from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {appService} from '~/services/services';

import {RootNavigationParamList} from '~/common/types/types';
import {RootScreenName} from '~/common/enums/navigation';
import {Home, ArticleDetails, Filters} from '~/screens/screens';
import {getScreenOptions} from './get-screen-options';

appService.init();
const NativeStack = createNativeStackNavigator<RootNavigationParamList>();

const Navigation: FC = () => {
  return (
    <NativeStack.Navigator screenOptions={getScreenOptions}>
      <NativeStack.Screen component={Home} name={RootScreenName.HOME} />
      <NativeStack.Screen
        component={ArticleDetails}
        name={RootScreenName.ARTICLE_DETAILS}
      />
      <NativeStack.Screen component={Filters} name={RootScreenName.FILTERS} />
    </NativeStack.Navigator>
  );
};

export {Navigation};
