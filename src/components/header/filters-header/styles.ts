import {StyleSheet} from 'react-native';
import {colors} from '~/common/constants/colors';
import {FONT_STYLES} from '~/styles/styles';

const styles = StyleSheet.create({
  text: {
    ...FONT_STYLES.fontWeightSemiBold,
    color: colors.black,
    fontSize: 16,
  },
});

export {styles};
