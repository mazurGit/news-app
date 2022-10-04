import {StyleSheet} from 'react-native';
import {colors} from '~/common/constants/colors';
import {FONT_STYLES, SHADOW_STYLE} from '~/styles/styles';

const styles = StyleSheet.create({
  wrapper: {
    padding: 15,
    borderRadius: 5,
    width: '95%',
    minHeight: 160,
    alignSelf: 'center',
    backgroundColor: colors.white,
    ...SHADOW_STYLE.boxShadow,
  },
  title: {
    ...FONT_STYLES.fontWeightSemiBold,
    color: colors.text,
    fontSize: 16,
  },
  divider: {
    backgroundColor: colors.divider,
    width: '100%',
    height: 2,
    alignSelf: 'center',
    marginVertical: 5,
  },
  contentWrapper: {
    paddingTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  description: {
    color: colors.text,
    width: '70%',
    fontSize: 12,
    ...FONT_STYLES.fontWeightMedium,
  },
  image: {
    width: 80,
    height: 80,
    resizeMode: 'cover',
  },
  time: {
    marginTop: 5,
    ...FONT_STYLES.fontWeightMedium,
    fontSize: 10,
    color: colors.textSecondary,
  },
});

export {styles};
