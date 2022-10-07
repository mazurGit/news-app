import {StyleSheet} from 'react-native';
import {colors} from '~/common/constants/colors';

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
  },
  line: {
    marginBottom: 18,
    height: 2,
    width: '30%',
    backgroundColor: colors.divider,
  }
});

export {styles};
