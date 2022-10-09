import React from 'react';
import {RouteProp} from '@react-navigation/native';
import {NativeStackNavigationOptions} from '@react-navigation/native-stack';
import {store} from '~/store/store';
import {filtersActions, newsActions} from '~/store/actions';
import {colors} from '~/common/constants/colors';
import {RootScreenName} from '~/common/enums/navigation';
import {
  NewsQuery,
  RootNavigationParamList,
  RootState,
} from '~/common/types/types';
import {FiltersHeader, SaveHeader} from '~/components/components';
import {Dimensions} from 'react-native';
import {removeObjectFalsyFields} from '~/helpers/helpers';

type Props = {
  route: RouteProp<RootNavigationParamList>;
};
const {width} = Dimensions.get('screen');
const {dispatch, getState} = store;

const getScreenOptions = ({
  route,
}: Props): Partial<NativeStackNavigationOptions> => {
  return {
    headerRight:
      route.name === RootScreenName.FILTERS
        ? SaveHeader
        : route.name === RootScreenName.HOME
        ? () => (
            <FiltersHeader contentContainerStyle={{marginRight: width - 110}} />
          )
        : undefined,
    presentation: route.name === RootScreenName.FILTERS ? 'modal' : 'card',
    headerTitleAlign: 'center',
    headerStyle: {backgroundColor: colors.gray},
    headerShown: true,
    headerBackVisible: true,
    headerTitle: route.name !== RootScreenName.FILTERS ? '' : undefined,
    headerSearchBarOptions:
      route.name === RootScreenName.HOME
        ? {
            onChangeText: ({nativeEvent: {text}}) =>
              dispatch(filtersActions.updateFilter({q: text})),
            onSearchButtonPress: () => {
              dispatch(newsActions.resetNews());
              dispatch(
                newsActions.getNews(
                  removeObjectFalsyFields<
                    RootState['filtersReducer'],
                    NewsQuery
                  >(getState().filtersReducer),
                ),
              );
            },
            headerIconColor: colors.black,
          }
        : undefined,
  };
};

export {getScreenOptions};
