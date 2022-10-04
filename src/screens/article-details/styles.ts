import {StyleSheet, Dimensions} from 'react-native';
import {FONT_STYLES, SHADOW_STYLE} from '~/styles/styles';
import {colors} from '~/common/constants/colors';

const {width} = Dimensions.get('screen');
const screenPadding = 15;

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: screenPadding,
    backgroundColor: colors.gray,
  },
  title: {
    ...FONT_STYLES.fontWeightSemiBold,
    ...SHADOW_STYLE.textShadow,
    fontSize: 18,
    textAlign: 'center',
    color: colors.text,
  },
  image: {
    marginTop: 20,
    width: width - screenPadding * 2,
    height: 250,
    resizeMode: 'cover',
  },
  descriptionWrapper: {
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginTop: 17,
    maxHeight: '50%',
  },
  description: {
    color: colors.text,
    fontSize: 15,
    ...FONT_STYLES.fontWeightRegular,
  },
  infoWrapper: {
    position: 'absolute',
    left: screenPadding,
    bottom: 8,
  },
  secondaryText: {
    color: colors.textSecondary,
    ...FONT_STYLES.fontWeightMedium,
    fontSize: 13,
  },
});

export {styles};
