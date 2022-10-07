import React, {FC} from 'react';
import {StyleProp, ViewStyle} from 'react-native';
import {useNavigation} from '~/hooks/hooks';
import {NewsDto, RootNavigationProps} from '~/common/types/types';
import {RootScreenName} from '~/common/enums/navigation';
import {Text, View, Image, TouchableOpacity} from '~/components/components';
import {styles} from './styles';
import {placeDefaultImage} from '~/helpers/helpers';
import dayjs from 'dayjs';

type Props = {
  contentContainerStyle?: StyleProp<ViewStyle>;
  articleData: NewsDto;
};

const Article: FC<Props> = ({contentContainerStyle, articleData}) => {
  const {title, description, urlToImage, id, publishedAt} = articleData;
  const navigation = useNavigation<RootNavigationProps>();
  const timeAfterPublishing = dayjs
    .duration(dayjs(publishedAt).diff(dayjs()))
    .humanize(true);
  const onPress = () => {
    navigation.navigate(RootScreenName.ARTICLE_DETAILS, {
      id,
    });
  };

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.wrapper, contentContainerStyle]}>
      <Text style={styles.title} numberOfLines={2}>
        {title}
      </Text>
      <View style={styles.divider} />
      <View style={styles.contentWrapper}>
        <Text style={styles.description} numberOfLines={6}>
          {description}
        </Text>
        <Image source={placeDefaultImage(urlToImage)} style={styles.image} />
      </View>
      <Text style={styles.time}>{timeAfterPublishing}</Text>
    </TouchableOpacity>
  );
};

export {Article};
