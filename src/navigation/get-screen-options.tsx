import {RouteProp} from '@react-navigation/native';
import {NativeStackNavigationOptions} from '@react-navigation/native-stack';
import {colors} from '~/common/constants/colors';
import {RootScreenName} from '~/common/enums/navigation';
import {RootNavigationParamList} from '~/common/types/types';
import {FiltersHeader, SaveHeader} from '~/components/components';

type Props = {
  route: RouteProp<RootNavigationParamList>;
};

const getScreenOptions = ({
  route,
}: Props): Partial<NativeStackNavigationOptions> => {
  return {
    headerRight: route.name === RootScreenName.FILTERS ? SaveHeader : undefined,
    presentation: route.name === RootScreenName.FILTERS ? 'modal' : 'card',
    headerTitleAlign: 'center',
    headerLeft: route.name === RootScreenName.HOME ? FiltersHeader : undefined,
    headerStyle: {backgroundColor: colors.gray},
    headerShown: true,
    headerBackVisible: true,
    headerTitle: route.name !== RootScreenName.FILTERS ? '' : undefined,
    headerSearchBarOptions:
      route.name === RootScreenName.HOME
        ? {
            onClose: () => console.log('canceld'),
            onChangeText: ({nativeEvent: {text}}) => console.log(text),
            headerIconColor: colors.black,
          }
        : undefined,
  };
};

export {getScreenOptions};
