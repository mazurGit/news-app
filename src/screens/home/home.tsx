import React, {FC} from 'react';
import {View, ScreenWrapper} from '~/components/components';
import {Article} from './components/components';
import {news} from '~/services/services';
import {useEffect} from '~/hooks/hooks';
import {Countries} from '~/common/enums/enums';

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
