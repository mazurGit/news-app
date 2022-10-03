import React, {FC} from 'react';
import {View, ScreenWrapper} from '~/components/components';
import {Article} from './components/components';

const Home: FC = () => {
  return (
    <ScreenWrapper>
      <View>
        <Article />
      </View>
    </ScreenWrapper>
  );
};

export {Home};
