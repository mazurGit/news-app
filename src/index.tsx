import 'react-native-gesture-handler';
import React, {FC} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Navigation} from './navigation/navigation';

const App: FC = () => {
  return (
    <NavigationContainer>
      <Navigation />
    </NavigationContainer>
  );
};

export {App};
