import 'react-native-gesture-handler';
import React, {FC} from 'react';
import {Provider as StoreProvider} from 'react-redux';
import {store} from '~/store/store';
import {NavigationContainer} from '@react-navigation/native';
import Toast from 'react-native-toast-message';
import {Navigation} from './navigation/navigation';

const App: FC = () => {
  return (
    <StoreProvider store={store}>
      <NavigationContainer>
        <Navigation />
      </NavigationContainer>
      <Toast />
    </StoreProvider>
  );
};

export {App};
