import React, {FC} from 'react';
import {StyleProp, ViewStyle} from 'react-native';
import {DatePickerSelector} from '~/common/enums/enums';
import {View} from '~/components/components';
import {DatePickerButton} from '../components';
import {styles} from './styles';

type Props = {
  contentContainerStyle?: StyleProp<ViewStyle>;
};

const DateRangeSection: FC<Props> = ({contentContainerStyle}) => {
  return (
    <View style={[styles.wrapper, contentContainerStyle]}>
      <DatePickerButton type={DatePickerSelector.FROM} />
      <View style={styles.line} />
      <DatePickerButton type={DatePickerSelector.TO} />
    </View>
  );
};

export {DateRangeSection};
