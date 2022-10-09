import React, {FC} from 'react';
import {Text, TouchableOpacity} from '../../components';
import {useNavigation} from '~/hooks/hooks';
import {RootNavigationProps} from '~/common/types/types';
import {RootScreenName} from '~/common/enums/navigation';
import {styles} from './styles';
import {StyleProp, ViewStyle} from 'react-native';

type Props = {
  contentContainerStyle?: StyleProp<ViewStyle>;
};

const FiltersHeader: FC<Props> = ({contentContainerStyle}) => {
  const navigation = useNavigation<RootNavigationProps>();
  const onPress = () => {
    navigation.navigate(RootScreenName.FILTERS);
  };
  return (
    <TouchableOpacity onPress={onPress} style={contentContainerStyle}>
      <Text style={styles.text}>Filters</Text>
    </TouchableOpacity>
  );
};

export {FiltersHeader};
