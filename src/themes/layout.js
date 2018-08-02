import { Dimensions } from 'react-native';

export const { width, height } = Dimensions.get('window');

export const horizontal = {
  xxSmall: width * 0.0125,
  xcSmall: width * 0.018,
  xSmall: width * 0.025,
  small: width * 0.0375,
  medium: width * 0.05,
  large: width * 0.075,
};

export const vertical = {
  xxSmall: height * 0.0125,
  xcSmall: height * 0.018,
  xSmall: height * 0.025,
  small: height * 0.0375,
  medium: height * 0.05,
  normal: height * 0.065,
  large: height * 0.075,
};
