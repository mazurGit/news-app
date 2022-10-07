import React from 'react';
import {Text, TouchableOpacity} from '../../components';
import {useNavigation} from '~/hooks/hooks';
import {RootNavigationProps} from '~/common/types/types';
import {RootScreenName} from '~/common/enums/navigation';
import {styles} from './styles';

const FiltersHeader = () => {
  const navigation = useNavigation<RootNavigationProps>();
  const onPress = () => {
    navigation.navigate(RootScreenName.FILTERS);
  };
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={styles.text}>Filters</Text>
    </TouchableOpacity>
  );
};

export {FiltersHeader};
