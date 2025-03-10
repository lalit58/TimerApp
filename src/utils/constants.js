import {Dimensions, PixelRatio, Platform, StatusBar} from 'react-native';

export const getWindow = Dimensions.get('window');
export const SCREEN_WIDTH = getWindow.width;
export const SCREEN_HEIGHT = getWindow.height;
export const itemVerticalSpace = 10;
export const itemHorizontalSpace = 10;
export const {OS} = Platform;
