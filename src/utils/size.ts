import {Dimensions, NativeModules, Platform} from 'react-native';
const sizes = Dimensions.get('window');

export const DEVICE_WIDTH = sizes.width;
export const DEVICE_HEIGHT = sizes.height;
