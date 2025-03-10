import {StyleSheet} from 'react-native';
import {PixelPerfect} from '../../utils/pixelSetup';
import {Colors} from '../../utils/theme/colors';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: PixelPerfect.heightPixel(8),
    backgroundColor: Colors._F0F0F0,
  },
  actionButton: {
    padding: 8,
    backgroundColor: Colors._e0e0e0,
    borderRadius: 4,
  },
});
export default styles;
