import {StyleSheet} from 'react-native';
import {colors} from '~/common/constants/colors';
import {FONT_STYLES} from '~/styles/styles';

const styles = StyleSheet.create({
  labelContainerStyle: {
    backgroundColor: colors.btnBackground,
    marginTop: 10,
  },
  labelStyle: {
    ...FONT_STYLES.fontWeightRegular,
  },
  dropDownContainerStyle: {
    backgroundColor: colors.btnBackground,
  },
  searchTextInputStyle: {
    backgroundColor: colors.white,
  },
  placeholderStyle: {
    borderWidth: 0,
    paddingHorizontal: 15,
    paddingVertical: 0,
    borderRadius: 10,
    backgroundColor: colors.btnBackground,
  },
});

export {styles};
