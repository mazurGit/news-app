import {StyleSheet} from 'react-native';
import {colors} from '~/common/constants/colors';
import {FONT_STYLES} from '~/styles/styles';

const styles = StyleSheet.create({
  title: {
    color: colors.textSecondary,
    ...FONT_STYLES.fontWeightSemiBold,
    fontSize: 15,
  },
});

export {styles};
