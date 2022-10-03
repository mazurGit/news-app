import React, {FC} from 'react';
import {
  Text,
  Image,
  ScrollView,
  ScreenWrapper,
  View,
} from '~/components/components';
import {styles} from './styles';
import {images} from '~/assets/assets';

const ArticleDetails: FC = () => {
  return (
    <ScreenWrapper style={styles.wrapper}>
      <Text style={styles.title} numberOfLines={2}>
        Cryptoverse
      </Text>
      <Image source={images.article} style={styles.image} />
      <ScrollView style={styles.descriptionWrapper}>
        <Text style={styles.description}>
          Sept 27 (Reuters) - Spare a thought for the beleaguered bitcoin miner.
          In late 2021, miners were the toast of the town with a surefire path
          to profit: hook powerful computers up to cheap power, crac…Sept 27
          (Reuters) - Spare a thought for the beleaguered bitcoin miner. In late
          2021, miners were the toast of the town with a surefire path to
          profit: hook powerful computers up to cheap power, crac…
        </Text>
      </ScrollView>
      <View style={styles.infoWrapper}>
        <Text style={styles.secondaryText}>
          PUBLISHED SUN, OCT 2 2022 11:32
        </Text>
        <Text style={styles.secondaryText}>John Lue</Text>
      </View>
    </ScreenWrapper>
  );
};

export {ArticleDetails};
