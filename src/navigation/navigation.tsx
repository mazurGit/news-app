import React, {FC} from 'react';
import {Provider as StoreProvider} from 'react-redux';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {store} from '~/store/store';
import {RootNavigationParamList} from '~/common/types/types';
import {RootScreenName} from '~/common/enums/navigation';
import {Home, ArticleDetails} from '~/screens/screens';

const NativeStack = createNativeStackNavigator<RootNavigationParamList>();

const Navigation: FC = () => {
  return (
    <StoreProvider store={store}>
      <NativeStack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <NativeStack.Screen
          component={ArticleDetails}
          name={RootScreenName.ARTICLE_DETAILS}
        />
        <NativeStack.Screen component={Home} name={RootScreenName.HOME} />
      </NativeStack.Navigator>
    </StoreProvider>
  );
};

export {Navigation};
