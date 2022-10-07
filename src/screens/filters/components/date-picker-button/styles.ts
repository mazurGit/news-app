import {StyleSheet} from 'react-native';
import {colors} from '~/common/constants/colors';
import {FONT_STYLES} from '~/styles/styles';

const styles = StyleSheet.create({
  title: {
    color: colors.textSecondary,
    ...FONT_STYLES.fontWeightSemiBold,
  },
  dateContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'baseline',
    marginTop: 5,
    paddingHorizontal: 15,
    borderRadius: 8,
    backgroundColor: colors.btnBackground,
    height: 35,
  },
  dateText: {
    color: colors.text,
    ...FONT_STYLES.fontWeightMedium,
  },
});

export {styles};
