import React, {FC} from 'react';
import {StyleProp, ViewStyle} from 'react-native';
import {useMemo} from '~/hooks/hooks';
import {RadioButton, View} from '~/components/components';
import {FilterSectionTitle} from '~/common/enums/enums';
import {SectionTitle} from '../components';
import {sortBySelectorData} from '~/common/constants/constants';
import {styles} from './styles';

type Props = {
  contentContainerStyle?: StyleProp<ViewStyle>;
};

const SortBySection: FC<Props> = ({contentContainerStyle}) => {
  const renderItems = useMemo(() => {
    return sortBySelectorData.map(item => {
      return (
        <RadioButton
          label={item.title}
          key={item.name}
          isSelected={false}
          style={styles.radioBtnContainer}
        />
      );
    });
  }, []);

  return (
    <View style={contentContainerStyle}>
      <SectionTitle title={FilterSectionTitle.SORT_BY} />
      {renderItems}
    </View>
  );
};

export {SortBySection};
