import React, {FC} from 'react';
import {Provider as StoreProvider} from 'react-redux';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {appService} from '~/services/services';
import {store} from '~/store/store';
import {RootNavigationParamList} from '~/common/types/types';
import {RootScreenName} from '~/common/enums/navigation';
import {Home, ArticleDetails, Filters} from '~/screens/screens';

appService.init();
const NativeStack = createNativeStackNavigator<RootNavigationParamList>();

const Navigation: FC = () => {
  return (
    <StoreProvider store={store}>
      <NativeStack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <NativeStack.Screen component={Filters} name={'Filters'} />
        <NativeStack.Screen component={Home} name={RootScreenName.HOME} />
        <NativeStack.Screen
          component={ArticleDetails}
          name={RootScreenName.ARTICLE_DETAILS}
        />
      </NativeStack.Navigator>
    </StoreProvider>
  );
};

export {Navigation};
