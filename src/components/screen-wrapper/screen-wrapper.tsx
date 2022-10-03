import React, {FC} from 'react';
import {NativeSafeAreaViewProps} from 'react-native-safe-area-context';
import {colors} from '~/common/constants/constants';
import {StatusBar, SafeAreaView} from '../components';
import {styles} from './styles';

const ScreenWrapper: FC<NativeSafeAreaViewProps> = ({children, style}) => {
  return (
    <SafeAreaView style={[styles.wrapper, style]}>
      <StatusBar
        backgroundColor={colors.gray}
        translucent={false}
        barStyle="dark-content"
      />
      {children}
    </SafeAreaView>
  );
};

export {ScreenWrapper};
