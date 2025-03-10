import {PixelRatio, Dimensions, Platform, StatusBar} from 'react-native';
const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = Dimensions.get('window');
const widthBaseScale = SCREEN_WIDTH / 414;
const heightBaseScale = SCREEN_HEIGHT / 896;
const normalize = (size, based) => {
  const newSize =
    based === 'height' ? size * heightBaseScale : size * widthBaseScale;
  return Math.round(PixelRatio.roundToNearestPixel(newSize));
};
const fontScale = PixelRatio.getFontScale();

const PixelPerfect = {
  fontWithNew: size => size / fontScale,
  widthPixel: size => {
    return normalize(size, 'width');
  },
  heightPixel: size => {
    return normalize(size, 'height');
  },
  borderRadiusPixel: size => {
    return normalize(size, 'borderRadius');
  },
  fontPixel: size => {
    const {height, width} = Dimensions.get('window');
    const standardLength = width > height ? width : height;
    const offset =
      width > height ? 0 : Platform.OS === 'ios' ? 78 : StatusBar.currentHeight; // iPhone X style SafeAreaView size in portrait

    const deviceHeight =
      Platform.OS === 'android' ? standardLength - offset : standardLength;

    const heightPercent = (size * deviceHeight) / (height + 100);
    return Math.round(heightPercent);
  },
  pixelSizeVertical: size => {
    return PixelPerfect.heightPixel(size);
  },
  pixelSizeHorizontal: size => {
    return PixelPerfect.widthPixel(size);
  },
};
export {PixelPerfect};
