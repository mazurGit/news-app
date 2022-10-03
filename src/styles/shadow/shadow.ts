import {colors} from '~/common/constants/colors';

const SHADOW_STYLE = {
  boxShadow: {
    shadowColor: colors.dim_gray,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.15,
    shadowRadius: 1,
    elevation: 5,
  },
  textShadow: {
    textShadowColor: 'rgba(0, 0, 0, 0.25)',
    textShadowOffset: {width: 0, height: 2},
    textShadowRadius: 5,
  },
};

export {SHADOW_STYLE};
