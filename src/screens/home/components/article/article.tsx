import React, {FC} from 'react';
import {useNavigation} from '~/hooks/hooks';
import {RootNavigationProps} from '~/common/types/types';
import {RootScreenName} from '~/common/enums/navigation';
import {Text, View, Image, TouchableOpacity} from '~/components/components';
import {images} from '~/assets/assets';
import {styles} from './styles';
import {StyleProp, ViewStyle} from 'react-native';

type Props = {
  contentContainerStyle?: StyleProp<ViewStyle>;
};

const Article: FC<Props> = ({contentContainerStyle}) => {
  const navigation = useNavigation<RootNavigationProps>();
  const onPress = () => {
    navigation.navigate(RootScreenName.ARTICLE_DETAILS);
  };

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.wrapper, contentContainerStyle]}>
      <Text style={styles.title} numberOfLines={2}>
        Some Article Title
      </Text>
      <View style={styles.divider} />
      <View style={styles.contentWrapper}>
        <Text style={styles.description} numberOfLines={6}>
          Sept 27 (Reuters) - Spare a thought for the beleaguered bitcoin miner.
          In late 2021, miners were the toast of the town with a surefire path
          to profit: hook powerful computers up to cheap power, crac…
        </Text>
        <Image source={images.article} style={styles.image} />
      </View>
      <Text style={styles.time}>10 minutes ago</Text>
    </TouchableOpacity>
  );
};

export {Article};
