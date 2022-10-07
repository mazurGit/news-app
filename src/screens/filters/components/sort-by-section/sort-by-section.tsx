import React, {FC} from 'react';
import {StyleProp, ViewStyle} from 'react-native';
import {useAppDispatch, useAppSelector} from '~/hooks/hooks';
import {filtersActions} from '~/store/actions';
import {selectFilters} from '~/store/selectors';
import {useMemo} from '~/hooks/hooks';
import {RadioButton, View} from '~/components/components';
import {FilterSectionTitle, SortBy} from '~/common/enums/enums';
import {SectionTitle} from '../components';
import {sortBySelectorData} from '~/common/constants/constants';
import {styles} from './styles';

type Props = {
  contentContainerStyle?: StyleProp<ViewStyle>;
};

const SortBySection: FC<Props> = ({contentContainerStyle}) => {
  const dispatch = useAppDispatch();
  const {sortBy} = useAppSelector(selectFilters);
  const onPress = (filterName: SortBy) => {
    dispatch(filtersActions.updateFilter({sortBy: filterName}));
  };
  const renderItems = useMemo(() => {
    return sortBySelectorData.map(({name, title}) => {
      const isSelected = sortBy === name;
      return (
        <RadioButton
          label={title}
          key={name}
          isSelected={isSelected}
          style={styles.radioBtnContainer}
          onPress={() => onPress(name)}
        />
      );
    });
  }, [sortBy]);

  return (
    <View style={contentContainerStyle}>
      <SectionTitle title={FilterSectionTitle.SORT_BY} />
      {renderItems}
    </View>
  );
};

export {SortBySection};
