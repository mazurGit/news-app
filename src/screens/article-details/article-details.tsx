import React, {FC} from 'react';
import {useRoute} from '~/hooks/hooks';
import {RootNavigationParamList} from '~/common/types/types';
import {RootScreenName} from '~/common/enums/navigation';
import {RouteProp} from '@react-navigation/native';
import {useAppSelector} from '~/hooks/hooks';
import {
  Text,
  Image,
  ScrollView,
  ScreenWrapper,
  View,
} from '~/components/components';
import {styles} from './styles';
import {placeDefaultImage} from '~/helpers/helpers';
import {selectArticleById} from '~/store/selectors';

const ArticleDetails: FC = () => {
  const {
    params: {id},
  } =
    useRoute<
      RouteProp<RootNavigationParamList, RootScreenName.ARTICLE_DETAILS>
    >();
  const {title, description, publishedAt, urlToImage, author} = useAppSelector(
    state => selectArticleById(state, id),
  );

  return (
    <ScreenWrapper style={styles.wrapper}>
      <View style={styles.infoWrapper}>
        <Text style={styles.secondaryText} numberOfLines={1}>
          Published: {publishedAt}
        </Text>
        <Text style={styles.secondaryText} numberOfLines={1}>
          Author: {author}
        </Text>
      </View>
      <Image source={placeDefaultImage(urlToImage)} style={styles.image} />
      <Text style={styles.title} numberOfLines={3}>
        {title}
      </Text>
      <ScrollView style={styles.descriptionWrapper}>
        <Text style={styles.description}>{description}</Text>
      </ScrollView>
    </ScreenWrapper>
  );
};

export {ArticleDetails};
