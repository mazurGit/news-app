import React from 'react';
import {Text, TouchableOpacity} from '../../components';
import {RootState, NewsQuery} from '~/common/types/types';
import {useAppDispatch, useAppSelector} from '~/hooks/hooks';
import {removeObjectFalsyFields} from '~/helpers/helpers';
import {styles} from './styles';
import {selectFilters} from '~/store/selectors';
import {newsActions} from '~/store/actions';

const SaveHeader = () => {
  const dispatch = useAppDispatch();
  const filters = useAppSelector(selectFilters);
  const onPress = () => {
    dispatch(
      newsActions.getPopularNews(
        removeObjectFalsyFields<RootState['filtersReducer'], NewsQuery>(
          filters,
        ),
      ),
    );
  };

  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={styles.text}>Save</Text>
    </TouchableOpacity>
  );
};

export {SaveHeader};
