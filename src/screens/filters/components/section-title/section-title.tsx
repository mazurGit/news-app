import React, {FC} from 'react';
import {StyleProp, TextStyle} from 'react-native';
import {Text} from '~/components/components';
import {styles} from './styles';
import {FilterSectionTitle, DatePickerSelector} from '~/common/enums/enums';

type Props = {
  title: FilterSectionTitle | DatePickerSelector;
  contentContainerStyle?: StyleProp<TextStyle>;
};

const SectionTitle: FC<Props> = ({title, contentContainerStyle}) => {
  return <Text style={[styles.title, contentContainerStyle]}>{title}</Text>;
};

export {SectionTitle};
