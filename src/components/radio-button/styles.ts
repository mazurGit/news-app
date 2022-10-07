import {StyleSheet} from 'react-native';
import {colors} from '~/common/constants/colors';

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonContainer: {
    borderRadius: 12,
    borderWidth: 2,
    borderColor: colors.black,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 8,
  },
  filler: {
    borderRadius: 12,
    backgroundColor: colors.black,
  },
});

export {styles};
